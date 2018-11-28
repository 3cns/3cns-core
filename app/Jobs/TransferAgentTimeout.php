<?php

namespace App\Jobs;

use App\Http\Controllers\ChatController;
use App\Model\AgentTransferHistory;
use App\Model\MessageAgentTrack;
use App\Model\MessageTrack;
use Illuminate\Bus\Queueable;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Log;

class TransferAgentTimeout implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $transferId;
    public function __construct($transferId)
    {
        $this->transferId = $transferId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $transfer = AgentTransferHistory::findOrFail($this->transferId);
            $checkMessageTrack = MessageTrack::where('message_id', $transfer->message_id)->firstOrFail();
            $updateMessageTrack = MessageTrack::where('message_id', $transfer->message_id)
                ->update([
                    'status' => 2,
                    'agent_id' => $transfer->transfer_from_agent_id
                ]);

            $deleteMessageTract = MessageAgentTrack::where('chat_room_id',$checkMessageTrack->chat_room_id)
                ->where('widget_id', $checkMessageTrack->widget_id)->delete();

            $messageAgentTrack = new MessageAgentTrack();
            $messageAgentTrack->agent_id = $transfer->transfer_from_agent_id;
            $messageAgentTrack->message_id = $checkMessageTrack->message_id;
            $messageAgentTrack->chat_room_id = $checkMessageTrack->chat_room_id;
            $messageAgentTrack->widget_id = $checkMessageTrack->widget_id;
            $messageAgentTrack->message_forward_counter_id = 1;
            $messageAgentTrack->status = 2;
            $messageAgentTrack->save();

            $transfer->delete();

            $body = 'Transferred chat is not accepted by anyone so it has been reinstated to you.';

            $time = date("Y-m-d H:i:s");
            $url = url('/') . ':3000/mobile-chat';
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS,
                "messageBody=$body&direction=4&user=System&chatRoomId=$checkMessageTrack->chat_room_id&time=$time");

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $server_output = curl_exec($ch);
            curl_close($ch);

            //call to node API
            $url = url('/') . ':3000/send-rooms';
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, '');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $server_output = curl_exec($ch);
            curl_close($ch);
        } catch (\Exception $e) {
            Log::info('Queue Error !! '.$e->getMessage());
        } catch (ModelNotFoundException $e) {
            Log::info('Queue Error !! '.$e->getMessage());
        }
    }
}

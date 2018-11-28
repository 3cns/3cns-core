<?php

namespace App\Console\Commands;

use App\Jobs\TransferAgentTimeout;
use App\Model\AgentTransferHistory;
use App\Model\MessageAgentTrack;
use App\Model\Widgets;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;

class ChecktransferTimeout extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:timeout';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check agent timeout functionality';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            $transfers = AgentTransferHistory::where('status',0)->get();
            if (count($transfers) > 0) {
                foreach ($transfers as $transfer) {
                    // $messageAgentTrack = MessageAgentTrack::findOrFail($transfer->message_agent_track_id);
                    $messageAgentTrack = MessageAgentTrack::where('chat_room_id',$transfer->chat_room_id)->firstOrFail();
                    $widget = Widgets::where('widget_uuid',$messageAgentTrack->widget_id)->firstOrFail();
                    $to = Carbon::createFromFormat('Y-m-d H:i:s',$transfer->transfer_time);
                    $from = Carbon::createFromFormat('Y-m-d H:i:s',date('Y-m-d H:i:s'));
                    if ($from->greaterThan($to)) {
                        $diffSeconds = $to->diffInSeconds($from);
                        $transferTimeOut = explode(':',$widget->transfer_timeout);
                        $timeoutInSecond = $transferTimeOut[0]*60*60 + $transferTimeOut[1]*60;
                        $timeoutDif = $diffSeconds - $timeoutInSecond;
                        if (($timeoutDif > 0) && ($timeoutDif < 90)) {
                            Log::info('Command '.$transfer->id);
                            TransferAgentTimeout::dispatch($transfer->id);
                        }
                    }
                }
            }
        } catch (\Exception $e) {
            Log::info('Commend error !! '.$e->getMessage());
        } catch (ModelNotFoundException $e) {
            Log::info('Commend error !! '.$e->getMessage());
        }
    }
}

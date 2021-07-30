<?php
namespace App\Mail;
 
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
 
class SendEmailContact extends Mailable
{
    use Queueable, SerializesModels;
    public $sentData;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($sentData)
    {
        $this->sentData=$sentData;
    }
 
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('tuanheroeses@gmail.com')
        ->view('viewEmail.EmailContact',[
        'sentData' => $this->sentData
        ]);
    }
}
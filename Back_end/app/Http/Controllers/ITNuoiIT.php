<?php

namespace App\Http\Controllers;

use App\Models\ItNuoiIts;
use App\Models\INIForm;
use Illuminate\Http\Request;
use App\Jobs\SendMail;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ITNuoiIT extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ItNuoiIts::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $donate = new INIForm();
        $donate->name = $request->input("name");
        $donate->email = $request->input("email");
        $donate->phone = $request->input("phone");
        $donate->type = $request->input("type");
        $donate->time = $request->input("time");
        $donate->code = "";
        $donate->save();
        if ($donate->type === "month") {
            $code = "DNTT" . $donate->id;
        } else if ($donate->type === "once") {
            $code = "DNML" . $donate->id;
        }
        $donate->code = $code;
        $donate->save();
        try {
            $data = [
                'name' => $donate->name,
                'code' => $donate->code
            ];
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }
        SendMail::dispatch($data, $donate->email)->delay(now()->addMinute(1));
        return $donate;
        // return redirect('home');
    }
    public function recover(Request $request)
    {
        $data = INIForm::all();
        return response()->json($data);
    }
}
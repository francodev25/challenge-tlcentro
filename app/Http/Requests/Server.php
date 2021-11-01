<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Server extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'description' => 'required|max:30',
            'host' => 'required',
            'ip' => 'required',
        ];
    }

    public function messages(){
        return [
            'description.required' => 'El :attribute del server es obligatorio',
            'description.max' => 'El :attribute del server es demasiado largo. Debe tener menos que 30 caracteres',
            'host.required' => 'El :attribute del server es obligatorio',
            'ip.required' => 'El :attribute del server es obligatorio',
        ];
    }
}

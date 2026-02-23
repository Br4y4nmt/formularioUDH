<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FacultadController;
use App\Http\Controllers\Api\ProgramaAcademicoController;
use App\Http\Controllers\PublicationPdfController;

Route::get('/facultades', [FacultadController::class, 'index']);
Route::get('/programas', [ProgramaAcademicoController::class, 'index']);
Route::post('/pdf/publication', [PublicationPdfController::class, 'generate']);
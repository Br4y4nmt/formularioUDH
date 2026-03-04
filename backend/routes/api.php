<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FacultadController;
use App\Http\Controllers\Api\ProgramaAcademicoController;
use App\Http\Controllers\PublicationPdfController;
use App\Http\Controllers\Api\TeacherSearchController;
use App\Http\Controllers\Api\ProgramaGradoController;
use App\Http\Controllers\Api\EstudianteController;


Route::get('/facultades', [FacultadController::class, 'index']);
Route::get('/programas', [ProgramaAcademicoController::class, 'index']);
Route::post('/pdf/publication', [PublicationPdfController::class, 'generate']);
Route::post('/buscar-asesor-dni', [TeacherSearchController::class, 'buscar']);
Route::post('/programa/otorga', [ProgramaGradoController::class, 'getOtorga']);
Route::post('/buscar-estudiante', [EstudianteController::class, 'buscar']);
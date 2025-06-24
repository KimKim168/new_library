<?php

use App\Http\Controllers\RuleLibraryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [RuleLibraryController::class, 'index']);
Route::get('/about', [RuleLibraryController::class, 'about']);
Route::get('/resources', [RuleLibraryController::class, 'resources']);
Route::get('/databases', [RuleLibraryController::class, 'databases']);
Route::get('/contact_us', [RuleLibraryController::class, 'contact']);
Route::get('/collections', [RuleLibraryController::class, 'collections']);
Route::get('/detail/{id}', [RuleLibraryController::class, 'detail']);
Route::get('/introduction', [RuleLibraryController::class, 'introduction']);
Route::get('/news/{id}', [RuleLibraryController::class, 'news_show']);
Route::get('/news', [RuleLibraryController::class, 'news']);
Route::get('/new_books', [RuleLibraryController::class, 'new_books']);

<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\Documents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Category::factory(50)->create();
        Documents::factory(50)->create();

    }
}

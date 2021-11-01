<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Server;
use Faker\Generator as Faker;

$factory->define(Server::class, function (Faker $faker) {
    return [
        'description' => $this->faker->text(35),
        'host' => $this->faker->sentence,
        'ip' => $this->faker->ipv4
    ];
});

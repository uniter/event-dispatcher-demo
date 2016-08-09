<?php

namespace MyApp;

use Symfony\Component\EventDispatcher\EventDispatcher;

// Load Composer's autoloader
require_once __DIR__ . '/../../../vendor/autoload.php';

$eventDispatcher = new EventDispatcher();
$eventDispatcher->addListener('my.event', function () {
    print 'Listener called!';
});

$eventDispatcher->dispatch('my.event');
print 'and...';
$eventDispatcher->dispatch('my.event');

<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],
    'firebase' => [
        'database_url' => env('FIREBASE_DATABASE_URL', 'https://accounts.google.com/o/oauth2/auth'),
        'project_id' => env('FIREBASE_PROJECT_ID', 'landingpagepnv'),
        'private_key_id' => env('FIREBASE_PRIVATE_KEY_ID', '3c19ae3b560e38ab26d3250ac2f726b6a88729b6'),
        'private_key' => str_replace("\\n", "\n", env('FIREBASE_PRIVATE_KEY', '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCmpuUkXFLVeL+P\nez4qgcBvZGfyme5sg4t7at/wWew9kdD4OD1wapICC7drCb+uViRm1JlEkNFy0Xt4\nW8LwQ/Q5m9wRTXUHE1KVtxKNKlx5tS+4XTez5rFxzl3kAJeX+r6VAK5VGwAsLyCn\nqQ+ufJ7VoAJDF5EovGPpVdg2b0ekpbIi0QPe+Z0GG2D3RPexItsmrjqYwRg8pFJ+\nQkppuJ7Ot3Tzm8BLJbA0XxRhhy45aQZvnMKV+9afgd2JpWz37mgwTT51FadFyInP\n12oDdNIBvROkj/pqY8xfdzObgVcbffQGytqoYHHT1KQ+pGMW7ccE9vLTkrG9v/1r\n9mOQGEkpAgMBAAECggEAP/Jfj827XT15p/le99mU+UlaV614Xvw0+/UdG/GtZEy9\nFloiPS4ve4h6Z6C0hBV631hpvXUiYX//dEYlraMtpiNn1N3Xb5EbCebXQALGvE7p\nkkF2u9nkMerBfVk60i79jVhXDMIRFWM6EQuewFICcq903sC+yxZK8kCl9/FIWOU7\nNcfvX7mdpoG9A5jgG0xgtZTSJ69XTnE7+4oTL5Yus4hAPcANb/JcGSOWW2y9QBTs\ni+ST0rp1dENTma8PWgAcLRPy9uZ1S4Rvi3LBWwciUn0w+4pXESsJDwO3HUgwyRoJ\nJDynG1Abc13+QV+kru+klzA5GEOcNCGhfvL7/fzBjwKBgQDVXoJIZ+qnXQZ8ZsQV\n/bsGUakd5HGDiv2qeH5KjzsLxfdbib1cvSwsR9O6Ff5VPk4OoIL513Y56RIYG99a\nIwddH748FM2lLUIP6JWpK1pe2OcXb0J/aT6ZDAJVhrH0iH5sfED8RbEJv+rW4cop\nGPKlh4Rt3IM5hGr4PMovMoF1QwKBgQDH8t/LefrtQCctAGHQw8PRNV4g0SVEnE7v\nw0pACpt65oQHnncoRY/Ob6J2EiY2Xk1OdmWFTIyvc59wrkMSmhvRvp/GdBOzoQvN\nXWBwCG12s2zofMCatGhr4VD2KCi36i0GthXYLRNQm7LvqQerUHsgxNs+HOMR9XwI\nl/7mOtErIwKBgQCVgIMI+McSPbwtrlP2lLJW2yEEMOzYnqrep07WL0XQGgYXvYtR\nT7uDy1AvMvniAKXw2cbsCGxuZ0CmY+E75w9h0LwanPj6o5uGShGTVy0bCB/j67FM\nVRHnauK3yokmLf1nRijCmpJRooeJyOs9oJ1kHnBMChZoVsAc73s7VsgewQKBgCRY\ngNfS94ry82wZuq4hN9Iquk6K1hRvuWWaAUA87WBc0Lk11AEtC+QBpO2DhRCy+ah+\nmxus+5HVGbF469ZQzyfEV/TSGta3Opb9F0+mKIfAO9bS/ovgqW6ayYXFbQlpdv/W\nT4g5QV6QvukTt8IrYgZl4libFaepEP/a6UnefTEzAoGBALUXdhDZzprSe4qngvU0\n9gPZ+MpMmk9F4nlCnWKJ2WMOPPqE7jg+rjPebmZ+LCCXnc9hJllQbGIJjyG/d2hc\nbtRHPbDyz6vTXEDRcg3xad1GZBRZsIxy+euTP6gbucEQMFSNMKmbfepB8L6Eq6Vt\nuigs+a6bny7VQpJSahylhvpY\n-----END PRIVATE KEY-----\n')),
        'client_email' => env('FIREBASE_CLIENT_EMAIL', 'firebase-adminsdk-cpgov@landingpagepnv.iam.gserviceaccount.com'),
        'client_id' => env('FIREBASE_CLIENT_ID', '106566098270879218163'),
        'client_x509_cert_url' => env('FIREBASE_CLIENT_x509_CERT_URL', 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cpgov%40landingpagepnv.iam.gserviceaccount.com'),
    ]

];
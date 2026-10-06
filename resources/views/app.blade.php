<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Primary Meta Tags -->
        <title inertia>{{ config('app.name', 'OMYA INVEST') }}</title>
        <meta name="description" content="Société de bourse agréée COSUMAF, membre de la BVMAC. Spécialisée dans l’investissement boursier et la gestion de patrimoine en zone CEMAC. Brazzaville, Congo." />
        <meta name="author" content="OMYA INVEST" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="google-site-verification" content="UqSqQyHXWFNFyQ9CqDv_1lnQ0DQP40K_Wcj0FDbZ54E" />

        <!-- Geo Meta Tags for Local SEO -->
        <meta name="geo.region" content="CG-12" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.2634;15.2429" />
        <meta name="ICBM" content="-4.2634, 15.2429" />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{ str_contains(url()->current(), 'omya-invest.com') ? url()->current() : 'https://omya-invest.com/' }}" />
        <meta property="og:title" content="OMYA INVEST" />
        <meta property="og:description" content="Société de bourse agréée COSUMAF. Investissement boursier, gestion de patrimoine et conseil financier en zone CEMAC." />
        <meta property="og:image" content="{{ asset('/images/omya-invest-logo-light.png') }}" />
        <meta property="og:site_name" content="OMYA INVEST" />
        <meta property="og:locale" content="fr_CG" />

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="{{ str_contains(url()->current(), 'omya-invest.com') ? url()->current() : 'https://omya-invest.com/' }}" />
        <meta name="twitter:title" content="OMYA INVEST" />
        <meta name="twitter:description" content="Votre partenaire pour l’investissement boursier et la gestion de patrimoine en Afrique Centrale. Membre de la BVMAC." />
        <meta name="twitter:image" content="{{ asset('/images/omya-invest-logo-light.png') }}" />

        <!-- Canonical URL -->
        <link rel="canonical" href="{{ str_contains(url()->current(), 'omya-invest.com') ? url()->current() : 'https://omya-invest.com/' }}" />

        <!-- Favicon officiel OMYA INVEST -->
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <!-- JSON-LD Structured Data (Google Schema.org for Local Business & Financial Service) -->
        <script type="application/ld+json">
        {!! json_encode([
            '@context' => 'https://schema.org',
            '@type' => ['FinancialService', 'Organization', 'LocalBusiness'],
            'name' => 'OMYA INVEST',
            'alternateName' => ['OMYA CAPITAL', 'OMYA'],
            'url' => config('app.url', 'https://omya-invest.com'),
            'logo' => asset('/images/omya-invest-logo-light.png'),
            'image' => asset('/images/omya-invest-logo-light.png'),
            'description' => "OMYA INVEST est une société spécialisée dans l'investissement boursier, la gestion de patrimoine et le conseil financier en zone CEMAC.",
            'email' => 'contact@omya-invest.com',
            'telephone' => '+242066426989',
            'address' => [
                '@type' => 'PostalAddress',
                'streetAddress' => '76 avenue Amilcar Cabral centre-ville immeuble Villarecci en face du Radisson blu',
                'addressLocality' => 'Brazzaville',
                'addressRegion' => 'Brazzaville',
                'addressCountry' => 'CG',
            ],
            'geo' => [
                '@type' => 'GeoCoordinates',
                'latitude' => -4.2634,
                'longitude' => 15.2429,
            ],
            'openingHoursSpecification' => [
                '@type' => 'OpeningHoursSpecification',
                'dayOfWeek' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                'opens' => '08:00',
                'closes' => '17:00',
            ],
            'contactPoint' => [
                '@type' => 'ContactPoint',
                'telephone' => '+242066426989',
                'contactType' => 'customer service',
                'email' => 'contact@omya-invest.com',
                'availableLanguage' => ['French', 'English', 'Portuguese'],
            ],
        ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) !!}
        </script>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

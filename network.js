var IMG = 'images/beer/generic.svg';

// create an array with nodes
var nodes = new vis.DataSet([
    // ******************** Radeberger Gruppe
    // Allgäuer Brauhaus
    {group: 'Radeberger Gruppe KG', value: 23.6e6,                      id: 'Allgäuer Brauhaus', label: 'Allgäuer Brauhaus'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Allgäuer',          label: 'Allgäuer'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Altenmünster',      label: 'Altenmünster'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Büble',             label: 'Büble'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Fürstabt',          label: 'Fürstabt'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Norbertus',         label: 'Norbertus'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Oberdorfer',        label: 'Oberdorfer'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Teutsch',           label: 'Teutsch'},
    // Berliner-Kindl-Schultheiss-Brauerei
    {group: 'Radeberger Gruppe KG',                                     id: 'Berliner-Kindl-Schultheiss-Brauerei', label: 'Berliner-Kindl-Schultheiss-Brauerei'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Berliner Bürgerbräu',                 label: 'Berliner Bürgerbräu'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Berliner Kindl',                      label: 'Berliner Kindl'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Berliner Pilsner',                    label: 'Berliner Pilsner'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Märkischer Landmann',                 label: 'Märkischer Landmann'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Potsdamer Rex',                       label: 'Potsdamer Rex'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Prater',                              label: 'Prater'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Schultheiss',                         label: 'Schultheiss'},
    // Binding-Brauerei AG
    {group: 'Radeberger Gruppe KG',                                     id: 'Binding-Brauerei AG', label: 'Binding-Brauerei AG'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Binding',             label: 'Binding'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Clausthaler',         label: 'Clausthaler'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Henninger',           label: 'Henninger'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Schöfferhofer',       label: 'Schöfferhofer'},
    // Dortmunder Actien-Brauerei AG
    {group: 'Radeberger Gruppe KG',                                     id: 'Dortmunder Actien-Brauerei AG', label: 'Dortmunder Actien-Brauerei AG'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Kronen',                        label: 'Kronen'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Union',                         label: 'Union'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'DAB',                           label: 'DAB'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Brinkhoff\'s',                  label: 'Brinkhoff\'s'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Hansa',                         label: 'Hansa'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Hövels',                        label: 'Hövels'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Ritter',                        label: 'Ritter'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Thier',                         label: 'Thier'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Stifts',                        label: 'Stifts'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Wicküler',                      label: 'Wicküler'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Andreas Pils',                  label: 'Andreas Pils'},
    // Freiberger Brauhaus GmbH
    {group: 'Radeberger Gruppe KG',                                     id: 'Freiberger Brauhaus GmbH', label: 'Freiberger Brauhaus GmbH'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Freiberger',               label: 'Freiberger'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Freibergisch',             label: 'Freibergisch'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Meisterbräu',              label: 'Meisterbräu'},
    // Friesischen Brauhaus zu Jever
    {group: 'Radeberger Gruppe KG',                                     id: 'Friesisches Brauhaus zu Jever', label: 'Friesisches Brauhaus zu Jever'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Jever',                         label: 'Jever'},
    // Hanseatische Brauerei Rostock GmbH
    {group: 'Radeberger Gruppe KG',                                     id: 'Hanseatische Brauerei Rostock GmbH', label: 'Hanseatische Brauerei Rostock GmbH'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Rostocker',                          label: 'Rostocker'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Mahn & Ohlerich',                    label: 'Mahn & Ohlerich'},
    // Haus Kölscher Brautradition GmbH
    {group: 'Radeberger Gruppe KG',                                     id: 'Haus Kölscher Brautradition GmbH', label: 'Haus Kölscher Brautradition GmbH'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Gilden Kölsch',                    label: 'Gilden Kölsch'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Küppers Kölsch',                   label: 'Küppers Kölsch'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Sester Kölsch',                    label: 'Sester Kölsch'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Sion Kölsch',                      label: 'Sion Kölsch'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Peters Kölsch',                    label: 'Peters Kölsch'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Dom Kölsch',                       label: 'Dom Kölsch'},
    // Krostitzer Brauerei
    {group: 'Radeberger Gruppe KG',                                     id: 'Krostitzer Brauerei', label: 'Krostitzer Brauerei'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Ur-Krostitzer',       label: 'Ur-Krostitzer'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Schwedenquell',       label: 'Schwedenquell'},
    // Sternburg-Brauerei
    {group: 'Radeberger Gruppe KG',                                     id: 'Sternburg-Brauerei', label: 'Sternburg-Brauerei'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Sternburg',          label: 'Sternburg'},
    // Radeberger Exportbierbrauerei GmbH
    {group: 'Radeberger Gruppe KG',                                     id: 'Radeberger Exportbierbrauerei GmbH', label: 'Radeberger Exportbierbrauerei GmbH'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Radeberger Pilsner',                 label: 'Radeberger Pilsner'},
    // Brauerei Schlösser GmbH
    {group: 'Radeberger Gruppe KG',                                     id: 'Brauerei Schlösser GmbH', label: 'Brauerei Schlösser GmbH'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Schlösser Alt',           label: 'Schlösser Alt'},
    // Stuttgarter Hofbräu AG & Co. KG
    {group: 'Radeberger Gruppe KG',                                     id: 'Stuttgarter Hofbräu AG & Co. KG', label: 'Stuttgarter Hofbräu AG & Co. KG'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Stuttgarter Hofbräu',             label: 'Stuttgarter Hofbräu'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Malteser Weissbier',              label: 'Malteser Weissbier'},
    // Tucher Bräu GmbH & Co. KG
    {group: 'Radeberger Gruppe KG',                                     id: 'Tucher Bräu GmbH & Co. KG', label: 'Tucher Bräu GmbH & Co. KG'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Tucher',                    label: 'Tucher'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Lederer Bräu',              label: 'Lederer Bräu'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Zirndorfer',                label: 'Zirndorfer'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Grüner',                    label: 'Grüner'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Humbser',                   label: 'Humbser'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Patrizier',                 label: 'Patrizier'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Kloster Scheyern',          label: 'Kloster Scheyern'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Sebaldus Weizen',           label: 'Sebaldus Weizen'},
    {group: 'Radeberger Gruppe KG', shape: 'circularImage', image: IMG, id: 'Siechen',                   label: 'Siechen'},

    {id: '5,0 Original',    label: '5,0 Original',    shape: 'circularImage', image: IMG, group: 'Oettinger Brauerei GmbH'},
    {id: 'Adelskrone',      label: 'Adelskrone',      shape: 'circularImage', image: IMG, group: 'Harboes Bryggeri A/S'},
    {id: 'Amstel',          label: 'Amstel',          shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Astra',           label: 'Astra',           shape: 'circularImage', image: IMG, group: 'Carlsberg A/S'},
    {id: 'Auerbräu',        label: 'Auerbräu',        shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Beck’s',          label: 'Beck’s',          shape: 'circularImage', image: IMG, group: 'Anheuser-Busch InBev'},
    {id: 'Birra Moretti',   label: 'Birra Moretti',   shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Carlsberg',       label: 'Carlsberg',       shape: 'circularImage', image: IMG, group: 'Carlsberg A/S'},
    {id: 'Chiemseer',       label: 'Chiemseer',       shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Feldschlösschen', label: 'Feldschlösschen', shape: 'circularImage', image: IMG, group: 'Oettinger Brauerei GmbH'},
    {id: 'Hacker-Pschorr',  label: 'Hacker-Pschorr',  shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Heineken',        label: 'Heineken',        shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Holsten',         label: 'Holsten',         shape: 'circularImage', image: IMG, group: 'Carlsberg A/S'},
    {id: 'Hopf',            label: 'Hopf',            shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Karlsquell',      label: 'Karlsquell',      shape: 'circularImage', image: IMG, group: 'Oettinger Brauerei GmbH'},
    {id: 'Krušovice',       label: 'Krušovice',       shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Oettinger',       label: 'Oettinger',       shape: 'circularImage', image: IMG, group: 'Oettinger Brauerei GmbH'},
    {id: 'Paulaner',        label: 'Paulaner',        shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Pfungstädter',    label: 'Pfungstädter',    shape: 'circularImage', image: IMG, group: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG'},
    {id: 'Schultenbräu',    label: 'Schultenbräu',    shape: 'circularImage', image: IMG, group: 'Oettinger Brauerei GmbH'},
    {id: 'Thurn und Taxis', label: 'Thurn und Taxis', shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Welde',           label: 'Welde',           shape: 'circularImage', image: IMG, group: 'Weldebräu'},
    // Companies ------------------------------------------------------------------
    {id: '5,0 Biervertriebs-GmbH',                         label: '5,0 Biervertriebs-GmbH',                                         group: 'Oettinger Brauerei GmbH'},
    {id: 'Anheuser-Busch InBev',                           label: 'Anheuser-Busch InBev',                           value: 45.5e9,  group: 'Anheuser-Busch InBev'},
    {id: 'Auerbräu GmbH',                                  label: 'Auerbräu GmbH',                                                  group: 'Heineken N.V.'},
    {id: 'Brau Holding International',                     label: 'Brau Holding International',                                     group: 'Heineken N.V.'},
    {id: 'Brauerei Beck GmbH & Co. KG',                    label: 'Brauerei Beck GmbH & Co. KG',                                    group: 'Anheuser-Busch InBev'},
    {id: 'Brauerei Braunschweig',                          label: 'Brauerei Braunschweig',                                          group: 'Oettinger Brauerei GmbH'},
    {id: 'Carlsberg A/S',                                  label: 'Carlsberg A/S',                                  value: 8.8e9,   group: 'Carlsberg A/S'},
    {id: 'Chiemgauer Brauhaus GmbH',                       label: 'Chiemgauer Brauhaus GmbH',                                       group: 'Heineken N.V.'},
    {id: 'Darguner Brauerei',                              label: 'Darguner Brauerei',                                              group: 'Harboes Bryggeri A/S'},
    {id: 'Harboes Bryggeri A/S',                           label: 'Harboes Bryggeri A/S',                                           group: 'Harboes Bryggeri A/S'},
    {id: 'Heineken N.V.',                                  label: 'Heineken N.V.',                                  value: 20.5e9,  group: 'Heineken N.V.'},
    {id: 'Holsten-Brauerei AG',                            label: 'Holsten-Brauerei AG',                                            group: 'Carlsberg A/S'},
    {id: 'Královský pivovar Krušovice',                    label: 'Královský pivovar Krušovice',                                    group: 'Heineken N.V.'},
    {id: 'Oettinger Brauerei GmbH',                        label: 'Oettinger Brauerei GmbH',                        value: 0.41e9,  group: 'Oettinger Brauerei GmbH'},
    {id: 'Paulaner Brauerei GmbH & Co. KG',                label: 'Paulaner Brauerei GmbH & Co. KG',                                group: 'Heineken N.V.'},
    {id: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG', label: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG',                 group: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG'},
    {id: 'Radeberger Gruppe KG',                           label: 'Radeberger Gruppe KG',                           value: 1.8e9,   group: 'Radeberger Gruppe KG'},
    {id: 'Schörghuber Unternehmensgruppe',                 label: 'Schörghuber Unternehmensgruppe',                                 group: 'Schörghuber Unternehmensgruppe'},
    {id: 'Weißbierbrauerei Hopf GmbH',                     label: 'Weißbierbrauerei Hopf GmbH',                                     group: 'Heineken N.V.'},
    {id: 'Weldebräu',                                      label: 'Weldebräu',                                                      group: 'Weldebräu'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {to: 'Allgäuer Brauhaus', from: 'Allgäuer'},
    {to: 'Allgäuer Brauhaus', from: 'Altenmünster'},
    {to: 'Allgäuer Brauhaus', from: 'Büble'},
    {to: 'Allgäuer Brauhaus', from: 'Fürstabt'},
    {to: 'Allgäuer Brauhaus', from: 'Norbertus'},
    {to: 'Allgäuer Brauhaus', from: 'Oberdorfer'},
    {to: 'Allgäuer Brauhaus', from: 'Teutsch'},
    {to: 'Berliner-Kindl-Schultheiss-Brauerei', from: 'Berliner Bürgerbräu'},
    {to: 'Berliner-Kindl-Schultheiss-Brauerei', from: 'Berliner Kindl'},
    {to: 'Berliner-Kindl-Schultheiss-Brauerei', from: 'Berliner Pilsner'},
    {to: 'Berliner-Kindl-Schultheiss-Brauerei', from: 'Märkischer Landmann'},
    {to: 'Berliner-Kindl-Schultheiss-Brauerei', from: 'Potsdamer Rex'},
    {to: 'Berliner-Kindl-Schultheiss-Brauerei', from: 'Prater'},
    {to: 'Berliner-Kindl-Schultheiss-Brauerei', from: 'Schultheiss'},
    {to: 'Binding-Brauerei AG', from: 'Binding'},
    {to: 'Binding-Brauerei AG', from: 'Clausthaler'},
    {to: 'Binding-Brauerei AG', from: 'Henninger'},
    {to: 'Binding-Brauerei AG', from: 'Schöfferhofer'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'Kronen'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'Union'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'DAB'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'Brinkhoff\'s'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'Hansa'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'Hövels'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'Ritter'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'Thier'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'Stifts'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'Wicküler'},
    {to: 'Dortmunder Actien-Brauerei AG', from: 'Andreas Pils'},
    {to: 'Freiberger Brauhaus GmbH', from: 'Freiberger'},
    {to: 'Freiberger Brauhaus GmbH', from: 'Freibergisch'},
    {to: 'Freiberger Brauhaus GmbH', from: 'Meisterbräu'},
    {to: 'Friesisches Brauhaus zu Jever', from: 'Jever'},
    {to: 'Hanseatische Brauerei Rostock GmbH', from: 'Rostocker'},
    {to: 'Hanseatische Brauerei Rostock GmbH', from: 'Mahn & Ohlerich'},
    {to: 'Haus Kölscher Brautradition GmbH', from: 'Gilden Kölsch'},
    {to: 'Haus Kölscher Brautradition GmbH', from: 'Küppers Kölsch'},
    {to: 'Haus Kölscher Brautradition GmbH', from: 'Sester Kölsch'},
    {to: 'Haus Kölscher Brautradition GmbH', from: 'Sion Kölsch'},
    {to: 'Haus Kölscher Brautradition GmbH', from: 'Peters Kölsch'},
    {to: 'Haus Kölscher Brautradition GmbH', from: 'Dom Kölsch'},
    {to: 'Krostitzer Brauerei', from: 'Schwedenquell'},
    {to: 'Sternburg-Brauerei', from: 'Sternburg'},
    {to: 'Radeberger Exportbierbrauerei GmbH', from: 'Radeberger Pilsner'},
    {to: 'Brauerei Schlösser GmbH', from: 'Schlösser Alt'},
    {to: 'Stuttgarter Hofbräu AG & Co. KG', from: 'Stuttgarter Hofbräu'},
    {to: 'Stuttgarter Hofbräu AG & Co. KG', from: 'Malteser Weissbier'},
    {to: 'Tucher Bräu GmbH & Co. KG', from: 'Tucher'},
    {to: 'Tucher Bräu GmbH & Co. KG', from: 'Lederer Bräu'},
    {to: 'Tucher Bräu GmbH & Co. KG', from: 'Zirndorfer'},
    {to: 'Tucher Bräu GmbH & Co. KG', from: 'Grüner'},
    {to: 'Tucher Bräu GmbH & Co. KG', from: 'Humbser'},
    {to: 'Tucher Bräu GmbH & Co. KG', from: 'Patrizier'},
    {to: 'Tucher Bräu GmbH & Co. KG', from: 'Kloster Scheyern'},
    {to: 'Tucher Bräu GmbH & Co. KG', from: 'Sebaldus Weizen'},
    {to: 'Tucher Bräu GmbH & Co. KG', from: 'Siechen'},
    {to: 'Radeberger Gruppe KG', from: 'Allgäuer Brauhaus'},
    {to: 'Radeberger Gruppe KG', from: 'Berliner-Kindl-Schultheiss-Brauerei'},
    {to: 'Radeberger Gruppe KG', from: 'Binding-Brauerei AG'},
    {to: 'Radeberger Gruppe KG', from: 'Dortmunder Actien-Brauerei AG'},
    {to: 'Radeberger Gruppe KG', from: 'Freiberger Brauhaus GmbH'},
    {to: 'Radeberger Gruppe KG', from: 'Friesisches Brauhaus zu Jever'},
    {to: 'Radeberger Gruppe KG', from: 'Hanseatische Brauerei Rostock GmbH'},
    {to: 'Radeberger Gruppe KG', from: 'Haus Kölscher Brautradition GmbH'},
    {to: 'Radeberger Gruppe KG', from: 'Krostitzer Brauerei'},
    {to: 'Radeberger Gruppe KG', from: 'Sternburg-Brauerei'},
    {to: 'Radeberger Gruppe KG', from: 'Radeberger Exportbierbrauerei GmbH'},
    {to: 'Radeberger Gruppe KG', from: 'Brauerei Schlösser GmbH'},
    {to: 'Radeberger Gruppe KG', from: 'Stuttgarter Hofbräu AG & Co. KG'},
    {to: 'Radeberger Gruppe KG', from: 'Tucher Bräu GmbH & Co. KG'},
    {from: '5,0 Original', to: '5,0 Biervertriebs-GmbH'},
    {from: '5,0 Biervertriebs-GmbH', to: 'Brauerei Braunschweig'},
    {from: 'Adelskrone', to: 'Darguner Brauerei'},
    {from: 'Amstel', to: 'Heineken N.V.'},
    {from: 'Astra', to: 'Holsten-Brauerei AG'},
    {from: 'Auerbräu', to: 'Auerbräu GmbH'},
    {from: 'Auerbräu GmbH', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Beck’s', to: 'Brauerei Beck GmbH & Co. KG'},
    {from: 'Birra Moretti', to: 'Heineken N.V.'},
    {from: 'Brau Holding International', to: 'Schörghuber Unternehmensgruppe'},
    {from: 'Brau Holding International', to: 'Heineken N.V.'},
    {from: 'Brauerei Beck GmbH & Co. KG', to: 'Anheuser-Busch InBev'},
    {from: 'Brauerei Braunschweig', to: 'Oettinger Brauerei GmbH'},
    {from: 'Carlsberg', to: 'Carlsberg A/S'},
    {from: 'Chiemseer', to: 'Chiemgauer Brauhaus GmbH'},
    {from: 'Chiemgauer Brauhaus GmbH', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Darguner Brauerei', to: 'Harboes Bryggeri A/S'},
    {from: 'Feldschlösschen', to: 'Brauerei Braunschweig'},
    {from: 'Hacker-Pschorr', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Heineken', to: 'Heineken N.V.'},
    {from: 'Holsten', to: 'Holsten-Brauerei AG'},
    {from: 'Holsten-Brauerei AG', to: 'Carlsberg A/S'},
    {from: 'Hopf', to: 'Weißbierbrauerei Hopf GmbH'},
    {from: 'Karlsquell', to: 'Brauerei Braunschweig'},
    {from: 'Krušovice', to: 'Královský pivovar Krušovice'},
    {from: 'Královský pivovar Krušovice', to: 'Heineken N.V.'},
    {from: 'Oettinger', to: 'Oettinger Brauerei GmbH'},
    {from: 'Paulaner', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Paulaner Brauerei GmbH & Co. KG', to: 'Brau Holding International'},
    {from: 'Paulaner Brauerei GmbH & Co. KG', to: 'Schörghuber Unternehmensgruppe'},
    {from: 'Pfungstädter', to: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG'},
    {from: 'Schultenbräu', to: 'Brauerei Braunschweig'},
    {from: 'Thurn und Taxis', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Weißbierbrauerei Hopf GmbH', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Welde', to: 'Weldebräu'}
]);

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};

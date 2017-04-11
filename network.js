var IMG = 'images/beer/generic.svg';

// create an array with nodes
var nodes = new vis.DataSet([
    {id: '5,0 Original',                                   label: '5,0 Original',                                   shape: 'circularImage', image: IMG, group: 'Oettinger Brauerei GmbH'},
    {id: 'Adelskrone',                                     label: 'Adelskrone',                                     shape: 'circularImage', image: IMG, group: 'Harboes Bryggeri A/S'},
    {id: 'Amstel',                                         label: 'Amstel',                                         shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Astra',                                          label: 'Astra',                                          shape: 'circularImage', image: IMG, group: 'Carlsberg A/S'},
    {id: 'Auerbräu',                                       label: 'Auerbräu',                                       shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Beck’s',                                         label: 'Beck’s',                                         shape: 'circularImage', image: IMG, group: 'Anheuser-Busch InBev'},
    {id: 'Birra Moretti',                                  label: 'Birra Moretti',                                  shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Carlsberg',                                      label: 'Carlsberg',                                      shape: 'circularImage', image: IMG, group: 'Carlsberg A/S'},
    {id: 'Chiemseer',                                      label: 'Chiemseer',                                      shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Feldschlösschen',                                label: 'Feldschlösschen',                                shape: 'circularImage', image: IMG, group: 'Oettinger Brauerei GmbH'},
    {id: 'Hacker-Pschorr',                                 label: 'Hacker-Pschorr',                                 shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Heineken',                                       label: 'Heineken',                                       shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Holsten',                                        label: 'Holsten',                                        shape: 'circularImage', image: IMG, group: 'Carlsberg A/S'},
    {id: 'Hopf',                                           label: 'Hopf',                                           shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Karlsquell',                                     label: 'Karlsquell',                                     shape: 'circularImage', image: IMG, group: 'Oettinger Brauerei GmbH'},
    {id: 'Krušovice',                                      label: 'Krušovice',                                      shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Oettinger',                                      label: 'Oettinger',                                      shape: 'circularImage', image: IMG, group: 'Oettinger Brauerei GmbH'},
    {id: 'Paulaner',                                       label: 'Paulaner',                                       shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Pfungstädter',                                   label: 'Pfungstädter',                                   shape: 'circularImage', image: IMG, group: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG'},
    {id: 'Schultenbräu',                                   label: 'Schultenbräu',                                   shape: 'circularImage', image: IMG, group: 'Oettinger Brauerei GmbH'},
    {id: 'Thurn und Taxis',                                label: 'Thurn und Taxis',                                shape: 'circularImage', image: IMG, group: 'Heineken N.V.'},
    {id: 'Welde',                                          label: 'Welde',                                          shape: 'circularImage', image: IMG, group: 'Weldebräu'},
    // Companies ------------------------------------------------------------------
    {id: '5,0 Biervertriebs-GmbH',                         label: '5,0 Biervertriebs-GmbH',                         group: 'Oettinger Brauerei GmbH'},
    {id: 'Anheuser-Busch InBev',                           label: 'Anheuser-Busch InBev',                           group: 'Anheuser-Busch InBev'},
    {id: 'Auerbräu GmbH',                                  label: 'Auerbräu GmbH',                                  group: 'Heineken N.V.'},
    {id: 'Brau Holding International',                     label: 'Brau Holding International',                     group: 'Heineken N.V.'},
    {id: 'Brauerei Beck GmbH & Co. KG',                    label: 'Brauerei Beck GmbH & Co. KG',                    group: 'Anheuser-Busch InBev'},
    {id: 'Brauerei Braunschweig',                          label: 'Brauerei Braunschweig',                          group: 'Oettinger Brauerei GmbH'},
    {id: 'Carlsberg A/S',                                  label: 'Carlsberg A/S',                                  group: 'Carlsberg A/S'},
    {id: 'Chiemgauer Brauhaus GmbH',                       label: 'Chiemgauer Brauhaus GmbH',                       group: 'Heineken N.V.'},
    {id: 'Darguner Brauerei',                              label: 'Darguner Brauerei',                              group: 'Harboes Bryggeri A/S'},
    {id: 'Harboes Bryggeri A/S',                           label: 'Harboes Bryggeri A/S',                           group: 'Harboes Bryggeri A/S'},
    {id: 'Heineken N.V.',                                  label: 'Heineken N.V.',                                  group: 'Heineken N.V.'},
    {id: 'Holsten-Brauerei AG',                            label: 'Holsten-Brauerei AG',                            group: 'Carlsberg A/S'},
    {id: 'Královský pivovar Krušovice',                    label: 'Královský pivovar Krušovice',                    group: 'Heineken N.V.'},
    {id: 'Oettinger Brauerei GmbH',                        label: 'Oettinger Brauerei GmbH',                        group: 'Oettinger Brauerei GmbH'},
    {id: 'Paulaner Brauerei GmbH & Co. KG',                label: 'Paulaner Brauerei GmbH & Co. KG',                group: 'Heineken N.V.'},
    {id: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG', label: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG', group: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG'},
    {id: 'Schörghuber Unternehmensgruppe',                 label: 'Schörghuber Unternehmensgruppe',                 group: 'Schörghuber Unternehmensgruppe'},
    {id: 'Weißbierbrauerei Hopf GmbH',                     label: 'Weißbierbrauerei Hopf GmbH',                     group: 'Heineken N.V.'},
    {id: 'Weldebräu',                                      label: 'Weldebräu',                                      group: 'Weldebräu'}
]);

// create an array with edges
var edges = new vis.DataSet([
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

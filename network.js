
// create an array with nodes
var nodes = new vis.DataSet([
    {id: 'Amstel',                                         label: 'Amstel',                                         group: 'Heineken N.V.'},
    {id: 'Anheuser-Busch InBev',                           label: 'Anheuser-Busch InBev',                           group: 'Anheuser-Busch InBev'},
    {id: 'Astra',                                          label: 'Astra',                                          group: 'Carlsberg A/S'},
    {id: 'Auerbräu',                                       label: 'Auerbräu',                                       group: 'Heineken N.V.'},
    {id: 'Auerbräu GmbH',                                  label: 'Auerbräu GmbH',                                  group: 'Heineken N.V.'},
    {id: 'Beck’s',                                         label: 'Beck’s',                                         group: 'Anheuser-Busch InBev'},
    {id: 'Birra Moretti',                                  label: 'Birra Moretti',                                  group: 'Heineken N.V.'},
    {id: 'Brau Holding International',                     label: 'Brau Holding International',                     group: 'Heineken N.V.'},
    {id: 'Brauerei Beck GmbH & Co. KG',                    label: 'Brauerei Beck GmbH & Co. KG',                    group: 'Anheuser-Busch InBev'},
    {id: 'Carlsberg',                                      label: 'Carlsberg',                                      group: 'Carlsberg A/S'},
    {id: 'Carlsberg A/S',                                  label: 'Carlsberg A/S',                                  group: 'Carlsberg A/S'},
    {id: 'Chiemseer',                                      label: 'Chiemseer',                                      group: 'Heineken N.V.'},
    {id: 'Chiemgauer Brauhaus GmbH',                       label: 'Chiemgauer Brauhaus GmbH',                       group: 'Heineken N.V.'},
    {id: 'Hacker-Pschorr',                                 label: 'Hacker-Pschorr',                                 group: 'Heineken N.V.'},
    {id: 'Heineken',                                       label: 'Heineken',                                       group: 'Heineken N.V.'},
    {id: 'Heineken N.V.',                                  label: 'Heineken N.V.',                                  group: 'Heineken N.V.'},
    {id: 'Holsten',                                        label: 'Holsten',                                        group: 'Carlsberg A/S'},
    {id: 'Holsten-Brauerei AG',                            label: 'Holsten-Brauerei AG',                            group: 'Carlsberg A/S'},
    {id: 'Hopf',                                           label: 'Hopf',                                           group: 'Heineken N.V.'},
    {id: 'Krušovice',                                      label: 'Krušovice',                                      group: 'Heineken N.V.'},
    {id: 'Královský pivovar Krušovice',                    label: 'Královský pivovar Krušovice',                    group: 'Heineken N.V.'},
    {id: 'Weißbierbrauerei Hopf GmbH',                     label: 'Weißbierbrauerei Hopf GmbH',                     group: 'Heineken N.V.'},
    {id: 'Paulaner',                                       label: 'Paulaner',                                       group: 'Heineken N.V.'},
    {id: 'Paulaner Brauerei GmbH & Co. KG',                label: 'Paulaner Brauerei GmbH & Co. KG',                group: 'Heineken N.V.'},
    {id: 'Pfungstädter',                                   label: 'Pfungstädter',                                   group: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG'},
    {id: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG', label: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG', group: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG'},                     
    {id: 'Schörghuber Unternehmensgruppe',                 label: 'Schörghuber Unternehmensgruppe'},
    {id: 'Thurn und Taxis',                                label: 'Thurn und Taxis',                                group: 'Heineken N.V.'},
    {id: 'Welde',                                          label: 'Welde',                                          group: 'Weldebräu'},
    {id: 'Weldebräu',                                      label: 'Weldebräu',                                      group: 'Weldebräu'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 'Amstel', to: 'Heineken N.V.'},
    {from: 'Astra', to: 'Holsten-Brauerei AG'},
    {from: 'Auerbräu', to: 'Auerbräu GmbH'},
    {from: 'Auerbräu GmbH', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Beck’s', to: 'Brauerei Beck GmbH & Co. KG'},
    {from: 'Birra Moretti', to: 'Heineken N.V.'},
    {from: 'Brau Holding International', to: 'Schörghuber Unternehmensgruppe'},
    {from: 'Brau Holding International', to: 'Heineken N.V.'},
    {from: 'Brauerei Beck GmbH & Co. KG', to: 'Anheuser-Busch InBev'},
    {from: 'Carlsberg', to: 'Carlsberg A/S'},
    {from: 'Chiemseer', to: 'Chiemgauer Brauhaus GmbH'},
    {from: 'Chiemgauer Brauhaus GmbH', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Hacker-Pschorr', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Heineken', to: 'Heineken N.V.'},
    {from: 'Holsten', to: 'Holsten-Brauerei AG'},
    {from: 'Holsten-Brauerei AG', to: 'Carlsberg A/S'},
    {from: 'Hopf', to: 'Weißbierbrauerei Hopf GmbH'},
    {from: 'Krušovice', to: 'Královský pivovar Krušovice'},
    {from: 'Královský pivovar Krušovice', to: 'Heineken N.V.'},
    {from: 'Weißbierbrauerei Hopf GmbH', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Paulaner', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Paulaner Brauerei GmbH & Co. KG', to: 'Brau Holding International'},
    {from: 'Paulaner Brauerei GmbH & Co. KG', to: 'Schörghuber Unternehmensgruppe'},
    {from: 'Pfungstädter', to: 'Pfungstädter Brauerei Hildebrand GmbH & Co. KG'},
    {from: 'Thurn und Taxis', to: 'Paulaner Brauerei GmbH & Co. KG'},
    {from: 'Welde', to: 'Weldebräu'}
]);

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};

const items = [
    // Living Room
    { id: "bar_portable", name: "Bar, Portable", icon: "icons/bar_portable.png", cubicFeet: 12 },
    { id: "bench_frsd_piano", name: "Bench, Frsd/Piano", icon: "icons/bench_frsd_piano.png", cubicFeet: 5 },
    { id: "bookcase_sect", name: "Bookcase, Sect", icon: "icons/bookcase_sect.png", cubicFeet: 20 },
    { id: "cabinet_curio", name: "Cabinet, Curio", icon: "icons/cabinet_curio.png", cubicFeet: 20 },
    { id: "chair_arm", name: "Chair, Arm", icon: "icons/chair_arm.png", cubicFeet: 10 },
    { id: "chair_occ", name: "Chair, Occ", icon: "icons/chair_occ.png", cubicFeet: 15 },
    { id: "chair_overstuffed", name: "Chair, Overstuffed", icon: "icons/chair_overstuffed.png", cubicFeet: 25 },
    { id: "chair_rocker", name: "Chair, Rocker", icon: "icons/chair_rocker.png", cubicFeet: 12 },
    { id: "chair_straight", name: "Chair, Straight", icon: "icons/chair_straight.png", cubicFeet: 5 },
    { id: "clock_grandfather", name: "Clock, Grandfather", icon: "icons/clock_grandfather.png", cubicFeet: 20 },
    { id: "couch_3_seat", name: "Couch, 3 Seat", icon: "icons/couch_3_seat.png", cubicFeet: 35 },
    { id: "couch_4_seat", name: "Couch, 4 Seat", icon: "icons/couch_4_seat.png", cubicFeet: 50 },
    { id: "couch_sect_per_pc", name: "Couch, Sect (per pc)", icon: "icons/couch_sect_per_pc.png", cubicFeet: 30 },
    { id: "desk_rolltop", name: "Desk, Rolltop", icon: "icons/desk_rolltop.png", cubicFeet: 40 },
    { id: "desk_secretary", name: "Desk, Secretary", icon: "icons/desk_secretary.png", cubicFeet: 35 },
    { id: "fireplace_equipment", name: "Fireplace Equipment", icon: "icons/fireplace_equipment.png", cubicFeet: 3 },
    { id: "foot_stool", name: "Foot Stool", icon: "icons/foot_stool.png", cubicFeet: 2 },
    { id: "grand_piano", name: "Grand Piano", icon: "icons/grand_piano.png", cubicFeet: 70 },
    { id: "lamp_floor", name: "Lamp, Floor", icon: "icons/lamp_floor.png", cubicFeet: 3 },
    { id: "lamp_table", name: "Lamp, Table", icon: "icons/lamp_table.png", cubicFeet: 3 },
    { id: "music_cabinet", name: "Music Cabinet", icon: "icons/music_cabinet.png", cubicFeet: 10 },
    { id: "ottoman", name: "Ottoman", icon: "icons/ottoman.png", cubicFeet: 5 },
    { id: "piano_baby_grand", name: "Piano, Baby Grand", icon: "icons/piano_baby_grand.png", cubicFeet: 70 },
    { id: "piano_upright", name: "Piano, Upright", icon: "icons/piano_upright.png", cubicFeet: 60 },
    { id: "rug_large_pad", name: "Rug, Large/Pad", icon: "icons/rug_large_pad.png", cubicFeet: 10 },
    { id: "rug_small_pad", name: "Rug, Small/Pad", icon: "icons/rug_small_pad.png", cubicFeet: 5 },
    { id: "sofa_sect_per_pc", name: "Sofa, Sect (per pc)", icon: "icons/sofa_sect_per_pc.png", cubicFeet: 30 },
    { id: "sofa_loveseat", name: "Sofa, Loveseat", icon: "icons/sofa_loveseat.png", cubicFeet: 35 },
    { id: "stereo_console", name: "Stereo Console", icon: "icons/stereo_console.png", cubicFeet: 15 },
    { id: "table_coffee", name: "Table, Coffee", icon: "icons/table_coffee.png", cubicFeet: 15 },
    { id: "table_end", name: "Table, End", icon: "icons/table_end.png", cubicFeet: 5 },
    { id: "table_nesting", name: "Table, Nesting", icon: "icons/table_nesting.png", cubicFeet: 5 },
    { id: "tables_end", name: "Tables, End", icon: "icons/tables_end.png", cubicFeet: 5 },
    { id: "telephone_stand", name: "Telephone Stand", icon: "icons/telephone_stand.png", cubicFeet: 5 },
    { id: "tv_bigscreen", name: "TV, Bigscreen", icon: "icons/tv_bigscreen.png", cubicFeet: 40 },
    { id: "tv_portable", name: "TV, Portable", icon: "icons/tv_portable.png", cubicFeet: 5 },
    { id: "tv_table_model", name: "TV, Table Model", icon: "icons/tv_table_model.png", cubicFeet: 10 },
    { id: "tv_console", name: "TV Console", icon: "icons/tv_console.png", cubicFeet: 20 },

    // Dining Room
    { id: "bench_harvest", name: "Bench, Harvest", icon: "icons/bench_harvest.png", cubicFeet: 10 },
    { id: "buffet_base", name: "Buffet Base", icon: "icons/buffet_base.png", cubicFeet: 30 },
    { id: "hutch_top", name: "Hutch Top", icon: "icons/hutch_top.png", cubicFeet: 20 },
    { id: "cabinet_corner", name: "Cabinet, Corner", icon: "icons/cabinet_corner.png", cubicFeet: 20 },
    { id: "dining_table", name: "Dining Table", icon: "icons/dining_table.png", cubicFeet: 30 },
    { id: "dining_chair", name: "Dining Chair", icon: "icons/dining_chair.png", cubicFeet: 5 },
    { id: "server", name: "Server", icon: "icons/server.png", cubicFeet: 20 },
    { id: "tea_cart", name: "Tea Cart", icon: "icons/tea_cart.png", cubicFeet: 10 },

    // Add more items for other rooms as needed
];

// Create an object for easy lookup of cubic feet by item id
const itemMeasurements = {};
items.forEach(item => {
    itemMeasurements[item.id] = item.cubicFeet;
});
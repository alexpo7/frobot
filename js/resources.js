game.resources = [
	/**
	 * Graphics.
	 */
	// the main player spritesheet
	{name: "gripe_run_right",     type:"image",	src: "data/img/sprite/gripe_run_right.png"},
	// the actual main player spritesheet
	{name: "FROBOT_RUN_RIGHT",	  type:"image", src: "data/img/sprite/FROBOT_RUN_RIGHT.png"},
	// basic enemy robot spritesheet
	{name: "ROBOT_RUN_RIGHT",	  type:"image", src: "data/img/sprite/ROBOT_RUN_RIGHT.png"},
	// the spinning coin spritesheet
	{name: "SPINNING_SEQUIN",     type:"image",	src: "data/img/sprite/SPINNING_SEQUIN.png"},
	// the spinning coin spritesheet
	{name: "spinning_coin_gold",  type:"image",	src: "data/img/sprite/spinning_coin_gold.png"},
	// our enemty entity
	{name: "wheelie_right",       type:"image",	src: "data/img/sprite/wheelie_right.png"},
	// game font
	{name: "32x32_font",          type:"image",	src: "data/img/font/32x32_font.png"},
	// title screen
	{name: "Title_Screen",        type:"image",	src: "data/img/gui/Title_Screen.png"},
	// the parallax background
	{name: "area01_bkg",          type:"image",	src: "data/img/area01_bkg.png"},
	{name: "area01_bkg0",         type:"image",	src: "data/img/area01_bkg0.png"},
	{name: "area01_bkg1",         type:"image",	src: "data/img/area01_bkg1.png"},
	// our level tileset
	{name: "area01_level_tiles",  type:"image",	src: "data/img/map/area01_level_tiles.png"},
	// our level tileset
	{name: "area01_level_tiles1", type:"image",	src: "data/img/map/area01_level_tiles1.png"},
	
	/* 
	 * Maps. 
 	 */
	{name: "area01",              type: "tmx",	src: "data/map/area01.tmx"},

	/* 
	 * Background music. 
	 */	
	{name: "dst-inertexponent", type: "audio", src: "data/bgm/"},
	{name: "Take_On_Me",        type: "audio", src: "data/bgm/"},
	
	/* 
	 * Sound effects. 
	 */
	{name: "cling", type: "audio", src: "data/sfx/"},
	{name: "stomp", type: "audio", src: "data/sfx/"},
	{name: "jump",  type: "audio", src: "data/sfx/"}
];

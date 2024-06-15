(function(){
    var script = {
 "start": "this.playAudioList([this.audio_37155A0B_1D44_2246_41B3_294D6B591A36]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "width": "100%",
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "definitions": [{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -50.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A35C73B_1D74_72A0_41A6_1A9117C02E01",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -117.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04028527_1D74_76A0_41B3_274A50108908",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 151.6,
  "class": "PanoramaCameraPosition",
  "pitch": -1.44
 },
 "id": "panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 77.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BF3B6CB_1D74_73E0_419E_892A5825E24C",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -168.42,
   "backwardYaw": -64.34,
   "panorama": "this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 77.9,
   "backwardYaw": -53.02,
   "panorama": "this.panorama_149F086B_18B1_0345_41AD_18445899B6AA",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -107.22,
   "backwardYaw": 30.78,
   "panorama": "this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1392DE46_18B1_1F4F_41B5_244B99347242",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 156.88,
   "backwardYaw": -172.97,
   "panorama": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_091835_00_090_PureShot",
 "id": "panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0B84651F_18BF_02FD_4197_8213AFD05FEB",
  "this.overlay_0A0906E5_18B1_0F42_41B1_9211A47AA6DD",
  "this.overlay_0B995399_18B3_05C5_41A4_2D3ABBBFAE27",
  "this.overlay_0CB90769_18B3_0D45_4167_3C9DFD131CEA",
  "this.overlay_0CEEADA4_1CC4_2643_41AC_4D03F2EAC5AC",
  "this.overlay_0A7F9340_1CCC_22C3_4178_589275D9EEB8",
  "this.overlay_0D8615E4_1D1C_F1A0_41B7_9975DFF2B4B8"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -44.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_05D384BE_1D74_77A0_41B4_4A0D6EFEBDC2",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -155.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08A92609_1D74_7260_4181_487AA6D1E982",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A1E7725_1D74_72A0_4197_69D9C415743B",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 171.04,
   "backwardYaw": 34.91,
   "panorama": "this.panorama_1391783F_18B1_033D_41B0_2024E92953E3",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -64.34,
   "backwardYaw": -168.42,
   "panorama": "this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 55.08,
   "backwardYaw": 151.56,
   "panorama": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -93.36,
   "backwardYaw": 113.5,
   "panorama": "this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_092614_00_105_PureShot",
 "id": "panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0BFB2654_18B1_0F43_4186_AC82F766786A",
  "this.overlay_0BB21A56_18B3_074F_41A4_EF4FC5C8CC58",
  "this.overlay_0BC1056B_18B1_0D46_419C_0D534639C7FB",
  "this.overlay_0C380E9E_18AF_1FFE_4190_B573D364482F"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 24.74,
  "class": "PanoramaCameraPosition",
  "pitch": 3.21
 },
 "id": "panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -23.02,
   "backwardYaw": 153.32,
   "panorama": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_094340_00_157_PureShot",
 "id": "panorama_13A43576_18B1_0D4F_4197_877C8A2EB970",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0F468483_18D7_03C5_41A0_CB5CA278DCD4",
  "this.overlay_0F4CA367_18D1_054D_41B5_CF6C351E02A0",
  "this.overlay_0F789343_18D1_0545_41A8_9C370769C5C5",
  "this.overlay_0D875202_1D1C_7260_41B7_669BC75C9FBE"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -8.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A60370E_1D74_7260_41AF_B718173219BE",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -126.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B40763F_1D74_72A0_41A2_B074317D4678",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 107.66,
  "class": "PanoramaCameraPosition",
  "pitch": 12.11
 },
 "id": "panorama_1392DE46_18B1_1F4F_41B5_244B99347242_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -102.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04CE2545_1D74_76E0_419A_4FE7D2624E33",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 119.95,
  "class": "PanoramaCameraPosition",
  "pitch": 2.72
 },
 "id": "panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -136.33,
   "backwardYaw": 152.75,
   "panorama": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 32.16,
   "backwardYaw": -54.59,
   "panorama": "this.panorama_149F086B_18B1_0345_41AD_18445899B6AA",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 30.78,
   "backwardYaw": -107.22,
   "panorama": "this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 113.5,
   "backwardYaw": -93.36,
   "panorama": "this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_1392DE46_18B1_1F4F_41B5_244B99347242",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_091759_00_089_PureShot",
 "id": "panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0A94D22D_18B1_06DD_41B0_9FCB7AB30019",
  "this.overlay_0A041D79_18BF_3D45_41AE_A03517404D0E",
  "this.overlay_0BF4285A_18B7_0347_41A9_CF2120517325",
  "this.overlay_0B63E467_18B7_034D_41B4_BE900C258941",
  "this.overlay_05073F9D_18F3_1DFD_41A9_6948E8BF91AE",
  "this.overlay_0A6E4FAF_1CC4_225D_41B9_541DF6EA704A",
  "this.overlay_0C39270C_1D14_D260_41AF_8EE06747E5AA"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -9.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B638664_1D74_72A0_41B3_D57E5D43281F",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240614_093909_00_merged",
 "id": "panorama_149C6078_18B1_0343_41B5_19EE27DDF44C",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_0834CBBC_1CDC_6243_41B7_FEF9E79EE7C3"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 23.01,
   "backwardYaw": -21.34,
   "panorama": "this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 77.7,
   "backwardYaw": 103.96,
   "panorama": "this.panorama_1381B9B6_18AF_05CF_41A8_F778046546FC",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 143.22,
   "backwardYaw": -66.21,
   "panorama": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_092407_00_103_PureShot",
 "id": "panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0CE5E053_18B3_0346_415A_7103DE74D4FA",
  "this.overlay_0CA93531_18B1_02C5_4168_7154AF9EB875",
  "this.overlay_0346735F_18D1_057D_41B1_A5134F755C16"
 ],
 "pitch": 0
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -53.71,
   "backwardYaw": 96.48,
   "panorama": "this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 11.8,
   "backwardYaw": 89.4,
   "panorama": "this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_084427_00_068_PureShot",
 "id": "panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0B7D98A4_1CC4_EE42_41B2_621835202F1E",
  "this.overlay_0B1E069A_1CC4_2246_41AB_BD2281E5159F",
  "this.overlay_034E9BD0_1CCC_E1C2_41AE_606BC50AC762"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 115.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0497D570_1D74_76A0_41B9_4ACE7B53A4F9",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 151.56,
   "backwardYaw": 55.08,
   "panorama": "this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_1392DE46_18B1_1F4F_41B5_244B99347242",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -172.97,
   "backwardYaw": 156.88,
   "panorama": "this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 64.03,
   "backwardYaw": -113.9,
   "panorama": "this.panorama_13BC952E_18AF_02DF_41A6_56790046C980",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 5.01,
   "backwardYaw": 62.26,
   "panorama": "this.panorama_1381B9B6_18AF_05CF_41A8_F778046546FC",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -130.13,
   "backwardYaw": -109.48,
   "panorama": "this.panorama_149F086B_18B1_0345_41AD_18445899B6AA",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -66.21,
   "backwardYaw": 143.22,
   "panorama": "this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_092132_00_101_PureShot",
 "id": "panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0BD455E8_18BF_0D43_419D_097E09C860B3",
  "this.overlay_0B98F896_18B3_03CF_41B1_91ED517E4040",
  "this.overlay_0B4E1838_18B1_02C3_414D_9BDC730D1598",
  "this.overlay_0C30E519_18B1_02C5_41B7_026F55820CA2",
  "this.overlay_0C706791_1CC4_6245_41A0_0DB877BCF4A4",
  "this.overlay_0AA89EDB_1CC4_23C6_41BB_1446026874F0",
  "this.overlay_0BDE96FD_1CC4_23C2_418B_02C678B5A96F",
  "this.overlay_0D90A292_1D1F_D260_41A8_896AB34CD4A6"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 129.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B4F3637_1D74_72A0_4197_E9F38BDFE875",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -156.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_05CFE4AA_1D74_77A0_41B0_21B75612FE31",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -168.52,
   "backwardYaw": -102.79,
   "panorama": "this.panorama_149DA33C_18B1_06C3_4194_14F35D3FF621",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_094253_00_156_PureShot",
 "id": "panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0FCD66CB_18D7_0F45_41B8_68B454F135A9"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_camera",
 "class": "PanoramaCamera"
},
{
 "label": "140379-774881529_small",
 "scaleMode": "fit_inside",
 "width": 960,
 "thumbnailUrl": "media/video_12F162EE_1D14_53A0_419C_E9D32392C33A_t.jpg",
 "loop": false,
 "id": "video_12F162EE_1D14_53A0_419C_E9D32392C33A",
 "height": 540,
 "class": "Video",
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_12F162EE_1D14_53A0_419C_E9D32392C33A.mp4"
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20240614_083555_00_merged",
 "id": "panorama_14D14242_18B3_0747_4187_D0ACA310548C",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_3C70E9A7_1CCC_6E4D_41BB_E1B9E9C2557B",
  "this.overlay_3DF6460A_1CCC_2247_41B9_08D010B33F84"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -168.4,
   "backwardYaw": -79.97,
   "panorama": "this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 159.43,
   "backwardYaw": 165.63,
   "panorama": "this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "hfovMax": 130,
 "label": "IMG_20240614_093630_00_merged",
 "id": "panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_0F6221BF_1CC4_21BD_41AF_EDA1A7B6245F"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 135.73,
   "backwardYaw": -36.39,
   "panorama": "this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_14D14242_18B3_0747_4187_D0ACA310548C_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 62.26,
   "backwardYaw": 5.01,
   "panorama": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 103.96,
   "backwardYaw": 77.7,
   "panorama": "this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_092501_00_104_PureShot",
 "id": "panorama_1381B9B6_18AF_05CF_41A8_F778046546FC",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0CEF3722_18B3_0EC7_4153_CC833CE69D33",
  "this.overlay_0CA9F648_18B1_0F43_418A_7F48611AD3F8",
  "this.overlay_0346A23D_18D1_073D_41B5_43D43627ED9F"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_058794E3_1D74_77A0_419D_B4642FF3B233",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -128.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0530A492_1D74_7660_41A6_E90B65380EB5",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 113.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_089A75E8_1D74_71A0_41B7_0FEF433E26CC",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -147.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04EBB552_1D74_76E0_41B9_BA7710197882",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 100.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BE996BD_1D74_73A0_41B2_2EA5CDC99ADE",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 125.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BA366E9_1D74_73A0_41B1_5F0C0ED0263E",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 11.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BC946A7_1D74_73A0_4194_3BD2AB540A0C",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B09867B_1D74_72A0_41A9_8C1440AB00DE",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -75.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_05F314D5_1D74_77E0_4191_03741F3E2CED",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -35.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_053B147A_1D74_76A0_419D_8D463A4D88B3",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1381B9B6_18AF_05CF_41A8_F778046546FC",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -124.82,
   "backwardYaw": -104.46,
   "panorama": "this.panorama_149F086B_18B1_0345_41AD_18445899B6AA",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -113.9,
   "backwardYaw": 64.03,
   "panorama": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_092313_00_102_PureShot",
 "id": "panorama_13BC952E_18AF_02DF_41A6_56790046C980",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0B316CE7_18B1_034D_41A9_1CDC194EA95A",
  "this.overlay_05338C38_18F1_02C3_419A_CC4084F8A3F3",
  "this.overlay_0533A3E5_18F1_054D_41A9_AFEA877E44CE",
  "this.overlay_0C7102B0_1CC4_2243_41A2_699E2CB49991"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 80.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B5A3647_1D74_72E0_4189_F2CA534CED1F",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -27.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B96D6E2_1D74_73A0_4186_77D348D361F5",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 143.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_043F953D_1D74_76A0_41AF_A5A93267C065",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240614_084920_00_merged",
 "id": "panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_0B4EF4C8_1CC4_67C2_41A0_3F088D100A76",
  "this.overlay_05DE13DF_1CFC_21FD_41B0_08DEB6668E3E",
  "this.overlay_06C790F0_1CFC_5FC3_4175_F54D3C1795C0",
  "this.overlay_065E6022_1CFC_3E46_4177_FE8A8EA87BE2",
  "this.overlay_07EA129F_1CFC_227E_41B5_EB358D4276F8",
  "this.overlay_06D8241F_1CFC_267E_41A6_3FD4F5698DFB",
  "this.overlay_034C409B_1CCB_DE46_41B0_EF9C8B99DE9A"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -99.7,
   "backwardYaw": -161.11,
   "panorama": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 95.6,
   "backwardYaw": -34.14,
   "panorama": "this.panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 104.16,
   "backwardYaw": 85.37,
   "panorama": "this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 84.39,
   "backwardYaw": 137.21,
   "panorama": "this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -14.17,
   "backwardYaw": -40.14,
   "panorama": "this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -50.76,
   "backwardYaw": 169.07,
   "panorama": "this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 76.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_089EE5F0_1D74_71A0_41BB_69817864B000",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 55.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04E5955A_1D74_76E0_41A8_D892DF38FF18",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -85.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A726716_1D74_7260_41A5_A9F510241056",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -13.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A3AF733_1D74_72A0_41AD_F9D8E747DE89",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 75.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B04B682_1D74_7260_4199_927F428F9D58",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 72.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BBCC6F0_1D74_73A0_41B2_3518DBA756B4",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -21.34,
   "backwardYaw": 23.01,
   "panorama": "this.panorama_149C6078_18B1_0343_41B5_19EE27DDF44C",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_13920B52_18B1_0547_41A7_F7149F2563AA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_139F30B2_18B1_03C7_41B5_EB1548813172",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 170.46,
   "backwardYaw": -154.93,
   "panorama": "this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -36.39,
   "backwardYaw": 135.73,
   "panorama": "this.panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_093125_00_109_PureShot",
 "id": "panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_03E71369_18DF_0545_4189_50C58E53111B",
  "this.overlay_0DD7195E_1CCB_EEFF_41B9_89AA49F5C8B7",
  "this.overlay_0D586B7B_1CCC_62C5_4191_6D1AE2C63818",
  "this.overlay_0D0BB2FB_1CCC_23C6_41B7_DB08DDAE826B",
  "this.overlay_0E80E475_1CCC_E6C2_4196_A5354320A8FF",
  "this.overlay_0C22A1DD_1CCC_21FD_41B1_BCD22A0BDCB3",
  "this.overlay_0DD60BC9_1D1C_51E0_419D_F620FE9806CA"
 ],
 "pitch": 0
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer"
},
{
 "items": [
  {
   "media": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "camera": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13A43576_18B1_0D4F_4197_877C8A2EB970",
   "camera": "this.panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198",
   "camera": "this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF",
   "camera": "this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F",
   "camera": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13BC952E_18AF_02DF_41A6_56790046C980",
   "camera": "this.panorama_13BC952E_18AF_02DF_41A6_56790046C980_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80",
   "camera": "this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1381B9B6_18AF_05CF_41A8_F778046546FC",
   "camera": "this.panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2",
   "camera": "this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1392DE46_18B1_1F4F_41B5_244B99347242",
   "camera": "this.panorama_1392DE46_18B1_1F4F_41B5_244B99347242_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1391783F_18B1_033D_41B0_2024E92953E3",
   "camera": "this.panorama_1391783F_18B1_033D_41B0_2024E92953E3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4",
   "camera": "this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C",
   "camera": "this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190",
   "camera": "this.panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9",
   "camera": "this.panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13920B52_18B1_0547_41A7_F7149F2563AA",
   "camera": "this.panorama_13920B52_18B1_0547_41A7_F7149F2563AA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A",
   "camera": "this.panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_139F30B2_18B1_03C7_41B5_EB1548813172",
   "camera": "this.panorama_139F30B2_18B1_03C7_41B5_EB1548813172_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6",
   "camera": "this.panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226",
   "camera": "this.panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303",
   "camera": "this.panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_149F086B_18B1_0345_41AD_18445899B6AA",
   "camera": "this.panorama_149F086B_18B1_0345_41AD_18445899B6AA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_149C6078_18B1_0343_41B5_19EE27DDF44C",
   "camera": "this.panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_149DA33C_18B1_06C3_4194_14F35D3FF621",
   "camera": "this.panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "camera": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7",
   "camera": "this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE",
   "camera": "this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_14D14242_18B3_0747_4187_D0ACA310548C",
   "camera": "this.panorama_14D14242_18B3_0747_4187_D0ACA310548C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D",
   "camera": "this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C",
   "camera": "this.panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600",
   "camera": "this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB",
   "camera": "this.panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 104.4,
  "class": "PanoramaCameraPosition",
  "pitch": -1.94
 },
 "id": "panorama_13920B52_18B1_0547_41A7_F7149F2563AA_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 126.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04A69579_1D74_76A0_4198_00AFDDD5456A",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -23.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04615518_1D74_7660_41B5_FBFA0D0E80C6",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 90.37,
   "backwardYaw": 89.9,
   "panorama": "this.panorama_13920B52_18B1_0547_41A7_F7149F2563AA",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_139F30B2_18B1_03C7_41B5_EB1548813172",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_093428_00_113_PureShot",
 "id": "panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0397F030_18D1_02C3_4191_46DD924C75F4",
  "this.overlay_038B163B_18D1_0EC6_41B4_6CC81EA3F73C",
  "this.overlay_0E7998DD_1CCC_2FFD_419F_CF0762278118",
  "this.overlay_0DB264A6_1D1C_B7A0_41B7_3A7191868675"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -26.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08B00628_1D74_72A0_4160_FFFFAFC49C98",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -126.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B288691_1D74_7260_41B0_494C5408AADB",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -83.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04F5C561_1D74_76A3_41B9_ED0325FA8802",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -21.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08A30610_1D74_7260_41A7_A68174C672B4",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 139.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_05B7B501_1D74_7660_41A4_73C53DE58BEC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -145.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B3D16A0_1D74_73A0_419D_08EDABB41932",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 43.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B5C764E_1D74_72E0_4191_50EDAB2CBB9B",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240614_094210_00_merged",
 "id": "panorama_149DA33C_18B1_06C3_4194_14F35D3FF621",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_0E8E9069_18D1_0345_4196_8BB2E256AC6F",
  "this.overlay_016E8566_18D1_0D4F_419D_B13243553616"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -27.15,
   "backwardYaw": 24.08,
   "panorama": "this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -102.79,
   "backwardYaw": -168.52,
   "panorama": "this.panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_149F086B_18B1_0345_41AD_18445899B6AA_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_139F30B2_18B1_03C7_41B5_EB1548813172",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_094034_00_145_PureShot",
 "id": "panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_08F87062_1CC4_7EC6_41AC_1B06173BB7C9",
  "this.overlay_0F317158_1CC4_3EC3_41B8_E7CC3BA37108",
  "this.overlay_085C7E72_1CC5_E2C7_4181_1CDDB8046C70",
  "this.overlay_09CBB0F6_1CDC_3FCF_41BC_9BD39618F86A"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0588B4DC_1D74_77E0_41B2_3927A7475CD8",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 158.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B8FD6D3_1D74_73E0_41AB_D88B8B4241A1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 90.43,
  "class": "PanoramaCameraPosition",
  "pitch": -9.49
 },
 "id": "panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A0E971D_1D74_7260_41A5_2F9E8A0C2BAB",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 70.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0412052E_1D74_76A0_419F_C367D5BCBAFF",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 11.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0892B5F9_1D74_71A0_41A5_48DDC7561516",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1391783F_18B1_033D_41B0_2024E92953E3_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -127.89,
   "backwardYaw": -33.17,
   "panorama": "this.panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_093221_00_110_PureShot",
 "id": "panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0441DE62_18D1_1F47_41B6_02987E83064F",
  "this.overlay_3A2A31C7_1CCC_61CE_41BA_19AF81235A84"
 ],
 "pitch": 0
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 89.9,
   "backwardYaw": 90.37,
   "panorama": "this.panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_139F30B2_18B1_03C7_41B5_EB1548813172",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_093347_00_112_PureShot",
 "id": "panorama_13920B52_18B1_0547_41A7_F7149F2563AA",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0E74AE75_1CCC_22C2_41B5_89CB51F3846A",
  "this.overlay_0E3BEDB4_1CCC_2642_41A3_FCCCA18EFA3E",
  "this.overlay_0F8725ED_1CCC_21DD_41A7_31D0ECAF3AE7"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_042C0536_1D74_76A0_4194_98E4576D9816",
 "class": "PanoramaCamera"
},
{
 "displayPlaybackBar": true,
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 33.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B7A066C_1D74_72A0_4193_5B9B81DB0CCA",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -174.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A5A06FF_1D74_73A0_41B8_762256248EBE",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240614_083802_00_merged",
 "id": "panorama_148D050F_18B3_02DD_41A9_225DE0915B2D",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_3CAC3C99_1CCC_6645_4171_073488D09D89",
  "this.overlay_3F0A0D26_1CC4_664F_419B_04379F207148",
  "this.overlay_39269D40_1CDB_E6C2_41B0_FD289F201B27",
  "this.overlay_398FEF18_1CDC_2242_41B2_5FD557BAD29F",
  "this.overlay_38F950DB_1CDC_5FC5_41A6_2AFB99951153"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 166.42,
   "backwardYaw": -103.88,
   "panorama": "this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -79.97,
   "backwardYaw": -168.4,
   "panorama": "this.panorama_14D14242_18B3_0747_4187_D0ACA310548C",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 137.21,
   "backwardYaw": 84.39,
   "panorama": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 51.63,
   "backwardYaw": 24.88,
   "panorama": "this.panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 45.44,
   "backwardYaw": 158.55,
   "panorama": "this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "hfovMax": 130,
 "label": "IMG_20240614_092041_00_merged",
 "id": "panorama_149F086B_18B1_0345_41AD_18445899B6AA",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_042C0BB1_18D3_05C5_41B8_33F2AEF4E954",
  "this.overlay_05CAD0B7_18D1_03CD_4153_A3839D652971",
  "this.overlay_05FF1B49_18D1_0545_41AD_87C35E37983B",
  "this.overlay_3928159A_1CCC_2646_41BB_56041DDC224C",
  "this.overlay_3BA613CA_1CCC_21C7_41A2_2B6883CD9D77"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -53.02,
   "backwardYaw": 77.9,
   "panorama": "this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -109.48,
   "backwardYaw": -130.13,
   "panorama": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -54.59,
   "backwardYaw": 32.16,
   "panorama": "this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -104.46,
   "backwardYaw": -124.82,
   "panorama": "this.panorama_13BC952E_18AF_02DF_41A6_56790046C980",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -149.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04B15581_1D74_7660_41A4_85E90D52F428",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "camera": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13A43576_18B1_0D4F_4197_877C8A2EB970",
   "camera": "this.panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198",
   "camera": "this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF",
   "camera": "this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F",
   "camera": "this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13BC952E_18AF_02DF_41A6_56790046C980",
   "camera": "this.panorama_13BC952E_18AF_02DF_41A6_56790046C980_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80",
   "camera": "this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1381B9B6_18AF_05CF_41A8_F778046546FC",
   "camera": "this.panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2",
   "camera": "this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1392DE46_18B1_1F4F_41B5_244B99347242",
   "camera": "this.panorama_1392DE46_18B1_1F4F_41B5_244B99347242_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1391783F_18B1_033D_41B0_2024E92953E3",
   "camera": "this.panorama_1391783F_18B1_033D_41B0_2024E92953E3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4",
   "camera": "this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C",
   "camera": "this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190",
   "camera": "this.panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9",
   "camera": "this.panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13920B52_18B1_0547_41A7_F7149F2563AA",
   "camera": "this.panorama_13920B52_18B1_0547_41A7_F7149F2563AA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A",
   "camera": "this.panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_139F30B2_18B1_03C7_41B5_EB1548813172",
   "camera": "this.panorama_139F30B2_18B1_03C7_41B5_EB1548813172_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6",
   "camera": "this.panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226",
   "camera": "this.panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303",
   "camera": "this.panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_149F086B_18B1_0345_41AD_18445899B6AA",
   "camera": "this.panorama_149F086B_18B1_0345_41AD_18445899B6AA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_149C6078_18B1_0343_41B5_19EE27DDF44C",
   "camera": "this.panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_149DA33C_18B1_06C3_4194_14F35D3FF621",
   "camera": "this.panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "camera": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7",
   "camera": "this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE",
   "camera": "this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_14D14242_18B3_0747_4187_D0ACA310548C",
   "camera": "this.panorama_14D14242_18B3_0747_4187_D0ACA310548C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D",
   "camera": "this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C",
   "camera": "this.panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600",
   "camera": "this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -14.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BE446C4_1D74_73E0_41BB_D2DF16A6422B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -115.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B12568A_1D74_7260_41B9_2F1A2B6DA3BD",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 49.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04D9D54C_1D74_76E0_419C_581E38346012",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_12F162EE_1D14_53A0_419C_E9D32392C33A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0557F400_1D74_7660_4188_42C92C0A8680, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0557F400_1D74_7660_4188_42C92C0A8680, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0557F400_1D74_7660_4188_42C92C0A8680",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 11.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08BE3620_1D74_72A0_417A_196420BFE0C8",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 94.71,
   "backwardYaw": 42.59,
   "panorama": "this.panorama_1391783F_18B1_033D_41B0_2024E92953E3",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -154.93,
   "backwardYaw": 170.46,
   "panorama": "this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 53.88,
   "backwardYaw": -146.66,
   "panorama": "this.panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_149C6078_18B1_0343_41B5_19EE27DDF44C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 24.08,
   "backwardYaw": -27.15,
   "panorama": "this.panorama_149DA33C_18B1_06C3_4194_14F35D3FF621",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_093040_00_108_PureShot",
 "id": "panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0DAB7165_18D1_054D_41AB_7E63E9A36376",
  "this.overlay_0DD5B1EC_18D1_0543_41A6_0F4FA6643000",
  "this.overlay_0D802EE7_18D1_3F4D_41B8_5A232CB1D7D6",
  "this.overlay_0DB58AE8_18D1_0743_41B1_4B87DB6D2EA1",
  "this.overlay_34979ED5_1D3C_23CD_41B9_DD0F5240EB2B",
  "this.overlay_3479EDBE_1D3C_61BF_41B5_C0C12D8370BE"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -106.31,
  "class": "PanoramaCameraPosition",
  "pitch": -10.06
 },
 "id": "panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -137.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B68765D_1D74_72E0_41BB_AFF6A357549C",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -124.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04518510_1D74_7660_41A7_74641A2CC698",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0743A589_1D74_7660_41B8_04DA739C7F66",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -95.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0894C600_1D74_7260_41AD_E15FF1B56300",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 126.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A2B172C_1D74_72A0_4186_638B153BCA6D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -84.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_052D7463_1D74_76A0_41BC_D571F3A12111",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -94.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_05AF24F2_1D74_77A0_41B8_006FCE328A18",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -76.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_07532591_1D74_7660_41A5_336F8FB0DA5A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 31.47,
  "class": "PanoramaCameraPosition",
  "pitch": -2.46
 },
 "id": "panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_092818_00_106_PureShot",
 "id": "panorama_1392DE46_18B1_1F4F_41B5_244B99347242",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_04C35FB4_18D1_1DC3_4189_6B4483FB148F"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 27.52,
  "class": "PanoramaCameraPosition",
  "pitch": 5.89
 },
 "id": "panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -66.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BDD96B5_1D74_73A0_41B4_644775C26E64",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 34.91,
   "backwardYaw": 171.04,
   "panorama": "this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 42.59,
   "backwardYaw": 94.71,
   "panorama": "this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_092920_00_107_PureShot",
 "id": "panorama_1391783F_18B1_033D_41B0_2024E92953E3",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_0A7F9245_18B1_074D_41A2_600A212011F5",
  "this.overlay_0A58D285_18B3_07CD_41B3_272878D2968C",
  "this.overlay_0C5FB772_18AF_0D47_41B0_A0B3D15C8ADF"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -20.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_05E414CD_1D74_77E0_4194_165C5E7E258D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -134.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_05EE94C6_1D74_77E0_41B7_95BCA05B14F9",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14D14242_18B3_0747_4187_D0ACA310548C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -40.14,
   "backwardYaw": -14.17,
   "panorama": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 96.48,
   "backwardYaw": -53.71,
   "panorama": "this.panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -103.88,
   "backwardYaw": 166.42,
   "panorama": "this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 53.4,
   "backwardYaw": 129.83,
   "panorama": "this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_084304_00_067_PureShot",
 "id": "panorama_134A5134_18AF_02C3_4166_0A67229FC6D7",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_06104351_1CFD_E2C2_4199_4FFD10C66E64",
  "this.overlay_062B0D0A_1CFC_2646_41A4_C6258CFFE110",
  "this.overlay_009D894E_1CFC_6EDF_41B5_16DC3D07D859",
  "this.overlay_07975423_1CFC_2645_41A8_6E436E07BC7F",
  "this.overlay_01C5F7EC_1CC4_61C2_41A8_99BF3778EA1D",
  "this.overlay_0092B69C_1CC4_E243_41BA_21F2B48F629D",
  "this.overlay_034AE13C_1CCB_DE43_41A7_780DFF593502"
 ],
 "pitch": 0
},
{
 "hfovMax": 130,
 "label": "IMG_20240614_084638_00_merged",
 "id": "panorama_14992B7A_18B1_0547_41AE_14E34FA72600",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_0B41E684_1CC4_6242_4192_986C283F64C0",
  "this.overlay_0B30C17E_1CC4_3EBF_41BA_A09C948A6BF0",
  "this.overlay_05340193_1CFC_7E45_41B1_A593A95354B4",
  "this.overlay_03740DB7_1CCC_264D_419C_7EAF09F71A39"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 89.4,
   "backwardYaw": 11.8,
   "panorama": "this.panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 169.07,
   "backwardYaw": -50.76,
   "panorama": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 129.83,
   "backwardYaw": 53.4,
   "panorama": "this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_139F30B2_18B1_03C7_41B5_EB1548813172_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_04855569_1D74_76A0_41B0_D2A106B33BA4",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 66.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0473051F_1D74_7660_4189_6025F528DBC8",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 52.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B279698_1D74_7260_41AA_BFA9057E83E1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 146.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B85A6DA_1D74_73E0_41A8_D2FA832AB0FC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_14992B7A_18B1_0547_41AE_14E34FA72600_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 145.45,
  "class": "PanoramaCameraPosition",
  "pitch": -13.03
 },
 "id": "panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -161.11,
   "backwardYaw": -99.7,
   "panorama": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 152.75,
   "backwardYaw": -136.33,
   "panorama": "this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 153.32,
   "backwardYaw": -23.02,
   "panorama": "this.panorama_13A43576_18B1_0D4F_4197_877C8A2EB970",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_094433_00_158_PureShot",
 "id": "panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_004FF155_18D1_054D_417B_5DA2536322E4",
  "this.overlay_00627F73_18D3_3D45_41A0_ECAF5EDF4D7E",
  "this.overlay_0341A4A4_18D7_03C3_41B4_527C6E64265B"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 156.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B50B655_1D74_72E0_41BC_CA4A6CE77F1A",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240614_083020_00_merged",
 "id": "panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_3DCAA1AE_1CCC_7E5F_41AF_CCC8AB7F20AF",
  "this.overlay_3E2499F7_1CCC_21CD_418A_984908165C97",
  "this.overlay_3FA9938E_1CCC_225F_41AB_B6F711A57ECD",
  "this.overlay_3FBA75AF_1CCC_E65E_41A5_8233FFF3D75E",
  "this.overlay_3E9B32DE_1CC4_23FF_4192_39B8990919E7"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 158.55,
   "backwardYaw": 45.44,
   "panorama": "this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 165.63,
   "backwardYaw": 159.43,
   "panorama": "this.panorama_14D14242_18B3_0747_4187_D0ACA310548C",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 85.37,
   "backwardYaw": 104.16,
   "panorama": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 144.68,
   "backwardYaw": 176.25,
   "panorama": "this.panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -28.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BC746AE_1D74_73A0_41B8_056544EAB4AA",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "label": "IMG_20240614_084007_00_merged",
 "id": "panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_018DAAC3_1CC4_63C5_41A0_9B6A37F741D6",
  "this.overlay_0199BCA4_1CC4_2642_4177_DE7481418172",
  "this.overlay_012A1212_1CC4_2246_4182_B529A1457DFE",
  "this.overlay_036ACB87_1CC4_624E_41B2_0A258A72FDE1",
  "this.overlay_026B9F9A_1CC4_E247_41BB_A103CFCA9CE9",
  "this.overlay_027EA2B0_1CC4_E243_41BC_8F423B69D109",
  "this.overlay_035DFBE1_1CC4_21C5_4167_E33F091AFE7E"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14D14242_18B3_0747_4187_D0ACA310548C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -34.14,
   "backwardYaw": 95.6,
   "panorama": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 176.25,
   "backwardYaw": 144.68,
   "panorama": "this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 24.88,
   "backwardYaw": 51.63,
   "panorama": "this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1381B9B6_18AF_05CF_41A8_F778046546FC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_093512_00_114_PureShot",
 "id": "panorama_139F30B2_18B1_03C7_41B5_EB1548813172",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_039684E7_18D1_034D_41A5_36044D8D03FB",
  "this.overlay_03DEF465_18D3_034D_41B1_F702055AE8D1",
  "this.overlay_03D36361_18D3_0545_41B7_0C303FF5B846",
  "this.overlay_03700D56_18D1_1D4F_41AF_76E9D35D1890"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 76.72,
  "class": "PanoramaCameraPosition",
  "pitch": 7.23
 },
 "id": "panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -146.66,
   "backwardYaw": 53.88,
   "panorama": "this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -33.17,
   "backwardYaw": -127.89,
   "panorama": "this.panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20240614_093307_00_111_PureShot",
 "id": "panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_04F0CE46_18D1_1F4F_419C_665522BBC4D4",
  "this.overlay_3A441B0E_1CCC_625F_4177_558CE6F03240"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 145.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0592E4EB_1D74_77A0_41AA_1CEC0B8E55B6",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -102.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A547707_1D74_7260_41A5_F6FC764CB0B5",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08B5762F_1D74_72A0_41B2_2B1A3676231F",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -105.48,
  "class": "PanoramaCameraPosition",
  "pitch": -0.07
 },
 "id": "panorama_13BC952E_18AF_02DF_41A6_56790046C980_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 25.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_05C564B7_1D74_77A0_41B4_6421D4E85220",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -155.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08A47619_1D74_7260_41B3_79BA9A5E10BD",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A48A6F8_1D74_73A0_41B0_7F5A7F58D842",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 152.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B701673_1D74_72A0_41B3_FAB05CAC0D0D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -10.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0447D509_1D74_7660_41B2_F74CA519D705",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -42.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_05BBF4FA_1D74_77A0_4199_87D5394DAF00",
 "class": "PanoramaCamera"
},
{
 "audio": {
  "mp3Url": "media/audio_37155A0B_1D44_2246_41B3_294D6B591A36.mp3",
  "oggUrl": "media/audio_37155A0B_1D44_2246_41B3_294D6B591A36.ogg",
  "class": "AudioResource"
 },
 "autoplay": true,
 "id": "audio_37155A0B_1D44_2246_41B3_294D6B591A36",
 "data": {
  "label": "making-progress-dan-phillipson-main-version-02-56-10491"
 },
 "class": "MediaAudio"
},
{
 "paddingBottom": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": 58,
 "maxWidth": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "toolTipPaddingTop": 7,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#000000",
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 0,
 "height": "100%",
 "class": "ViewerArea",
 "borderSize": 0,
 "progressHeight": 6,
 "progressBottom": 55,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 0.5,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 10,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Georgia",
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "minHeight": 50,
 "top": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 100,
 "toolTipPaddingRight": 10,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 7,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "playbackBarBorderRadius": 0,
 "playbackBarBottom": 5,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": 641,
 "class": "Container",
 "shadow": false,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10,
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bottom": 0,
 "height": 118,
 "class": "Container",
 "shadow": false,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0.64,
 "overflow": "visible",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10,
 "data": {
  "name": "--MENU"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10,
 "data": {
  "name": "--INFO photo"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10,
 "data": {
  "name": "--INFO photoalbum"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10,
 "data": {
  "name": "--LOCATION"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10,
 "data": {
  "name": "--PHOTOALBUM + text"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "creationPolicy": "inAdvance",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10,
 "data": {
  "name": "--REALTOR"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": 58,
 "maxWidth": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.38,
   "yaw": -168.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_0_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -25.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2, this.camera_0497D570_1D74_76A0_41B9_4ACE7B53A4F9); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_0_0.png",
      "width": 235,
      "height": 185,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.38,
   "yaw": -168.42,
   "pitch": -25.81
  }
 ],
 "id": "overlay_0B84651F_18BF_02FD_4197_8213AFD05FEB",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.68,
   "yaw": -107.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_1_0.png",
      "width": 222,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.68,
   "yaw": -107.12,
   "pitch": -1.9
  }
 ],
 "id": "overlay_0A0906E5_18B1_0F42_41B1_9211A47AA6DD",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.87,
   "yaw": -107.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -25.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198, this.camera_04B15581_1D74_7660_41A4_85E90D52F428); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_2_0.png",
      "width": 215,
      "height": 218,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.87,
   "yaw": -107.22,
   "pitch": -25.22
  }
 ],
 "id": "overlay_0B995399_18B3_05C5_41A4_2D3ABBBFAE27",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.5,
   "yaw": 156.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -14.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F, this.camera_0743A589_1D74_7660_41B8_04DA739C7F66); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_3_0.png",
      "width": 189,
      "height": 211,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.5,
   "yaw": 156.88,
   "pitch": -14.89
  }
 ],
 "id": "overlay_0CB90769_18B3_0D45_4167_3C9DFD131CEA",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.28,
   "yaw": 77.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149F086B_18B1_0345_41AD_18445899B6AA, this.camera_04A69579_1D74_76A0_4198_00AFDDD5456A); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_5_0.png",
      "width": 176,
      "height": 211,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.28,
   "yaw": 77.9,
   "pitch": -5.84
  }
 ],
 "id": "overlay_0CEEADA4_1CC4_2643_41AC_4D03F2EAC5AC",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.49,
   "yaw": -171.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF_0_HS_6_0.png",
      "width": 117,
      "height": 146,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 3.49,
   "yaw": -171.55,
   "pitch": -9.77
  }
 ],
 "id": "overlay_0A7F9340_1CCC_22C3_4178_589275D9EEB8",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 22.75,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_0D8615E4_1D1C_F1A0_41B7_9975DFF2B4B8",
 "roll": 17.98,
 "loop": true,
 "vfov": 8.36,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_0D8615E4_1D1C_F1A0_41B7_9975DFF2B4B8_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -10.7,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 56.14,
 "yaw": 52.58,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_12F162EE_1D14_53A0_419C_E9D32392C33A.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 15.99,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.74,
   "yaw": -93.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -27.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198, this.camera_0BDD96B5_1D74_73A0_41B4_644775C26E64); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0_HS_0_0.png",
      "width": 215,
      "height": 218,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.74,
   "yaw": -93.36,
   "pitch": -27.88
  }
 ],
 "id": "overlay_0BFB2654_18B1_0F43_4186_AC82F766786A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.57,
   "yaw": -64.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -23.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF, this.camera_0BC946A7_1D74_73A0_4194_3BD2AB540A0C); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0_HS_1_0.png",
      "width": 202,
      "height": 211,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.57,
   "yaw": -64.34,
   "pitch": -23.94
  }
 ],
 "id": "overlay_0BB21A56_18B3_074F_41A4_EF4FC5C8CC58",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.33,
   "yaw": 55.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0_HS_2_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -14.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F, this.camera_0BC746AE_1D74_73A0_41B8_056544EAB4AA); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0_HS_2_0.png",
      "width": 182,
      "height": 152,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.33,
   "yaw": 55.08,
   "pitch": -14.29
  }
 ],
 "id": "overlay_0BC1056B_18B1_0D46_419C_0D534639C7FB",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.36,
   "yaw": 171.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0_HS_3_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -22.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1391783F_18B1_033D_41B0_2024E92953E3, this.camera_0B3D16A0_1D74_73A0_419D_08EDABB41932); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2_0_HS_3_0.png",
      "width": 228,
      "height": 191,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.36,
   "yaw": 171.04,
   "pitch": -22.24
  }
 ],
 "id": "overlay_0C380E9E_18AF_1FFE_4190_B573D364482F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.27,
   "yaw": -23.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0_HS_0_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -14.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10, this.camera_08B00628_1D74_72A0_4160_FFFFAFC49C98); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0_HS_0_0.png",
      "width": 215,
      "height": 179,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.27,
   "yaw": -23.02,
   "pitch": -14.98
  }
 ],
 "id": "overlay_0F468483_18D7_03C5_41A0_CB5CA278DCD4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.47,
   "yaw": 135.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -39.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0_HS_1_0.png",
      "width": 235,
      "height": 218,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.47,
   "yaw": 135.44,
   "pitch": -39.48
  }
 ],
 "id": "overlay_0F4CA367_18D1_054D_41B5_CF6C351E02A0",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.42,
   "yaw": 143.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A43576_18B1_0D4F_4197_877C8A2EB970_0_HS_2_0.png",
      "width": 222,
      "height": 211,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.42,
   "yaw": 143.22,
   "pitch": -16.66
  }
 ],
 "id": "overlay_0F789343_18D1_0545_41A8_9C370769C5C5",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 8.09,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_0D875202_1D1C_7260_41B7_669BC75C9FBE",
 "roll": 8.78,
 "loop": true,
 "vfov": 4,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_0D875202_1D1C_7260_41B7_669BC75C9FBE_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -6.43,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 68.24,
 "yaw": 133.21,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_12F162EE_1D14_53A0_419C_E9D32392C33A.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 8.04,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 7.62,
   "yaw": -136.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -14.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10, this.camera_0B96D6E2_1D74_73A0_4186_77D348D361F5); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0_HS_0_0.png",
      "width": 261,
      "height": 224,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 7.62,
   "yaw": -136.33,
   "pitch": -14.59
  }
 ],
 "id": "overlay_0A94D22D_18B1_06DD_41B0_9FCB7AB30019",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.22,
   "yaw": 113.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -31.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2, this.camera_0A48A6F8_1D74_73A0_41B0_7F5A7F58D842); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0_HS_1_0.png",
      "width": 241,
      "height": 231,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.22,
   "yaw": 113.5,
   "pitch": -31.22
  }
 ],
 "id": "overlay_0A041D79_18BF_3D45_41AE_A03517404D0E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.65,
   "yaw": 107.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0_HS_2_0.png",
      "width": 222,
      "height": 198,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.65,
   "yaw": 107.8,
   "pitch": -6.13
  }
 ],
 "id": "overlay_0BF4285A_18B7_0347_41A9_CF2120517325",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6,
   "yaw": 30.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -29.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF, this.camera_0BBCC6F0_1D74_73A0_41B2_3518DBA756B4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0_HS_3_0.png",
      "width": 229,
      "height": 218,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6,
   "yaw": 30.78,
   "pitch": -29.44
  }
 ],
 "id": "overlay_0B63E467_18B7_034D_41B4_BE900C258941",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.3,
   "yaw": 32.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149F086B_18B1_0345_41AD_18445899B6AA, this.camera_0BA366E9_1D74_73A0_41B1_5F0C0ED0263E); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_1_HS_4_0.png",
      "width": 176,
      "height": 211,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.3,
   "yaw": 32.16,
   "pitch": -4.07
  }
 ],
 "id": "overlay_05073F9D_18F3_1DFD_41A9_6948E8BF91AE",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.09,
   "yaw": 126.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0_HS_5_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198_0_HS_5_0.png",
      "width": 170,
      "height": 146,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.09,
   "yaw": 126.08,
   "pitch": -5.64
  }
 ],
 "id": "overlay_0A6E4FAF_1CC4_225D_41B9_541DF6EA704A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 13.52,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_0C39270C_1D14_D260_41AF_8EE06747E5AA",
 "roll": 14.88,
 "loop": true,
 "vfov": 5.86,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_0C39270C_1D14_D260_41AF_8EE06747E5AA_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -6.55,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 55.42,
 "yaw": 17.36,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_12F162EE_1D14_53A0_419C_E9D32392C33A.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 10.01,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 7.45,
   "yaw": 23.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0_HS_0_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C, this.camera_0B8FD6D3_1D74_73E0_41AB_D88B8B4241A1); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C6078_18B1_0343_41B5_19EE27DDF44C_0_HS_0_0.png",
      "width": 123,
      "height": 102,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 7.45,
   "yaw": 23.01,
   "pitch": -4.97
  }
 ],
 "id": "overlay_0834CBBC_1CDC_6243_41B7_FEF9E79EE7C3",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.43,
   "yaw": 143.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F, this.camera_089A75E8_1D74_71A0_41B7_0FEF433E26CC); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0_HS_0_0.png",
      "width": 183,
      "height": 159,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.43,
   "yaw": 143.22,
   "pitch": -10.26
  }
 ],
 "id": "overlay_0CE5E053_18B3_0346_415A_7103DE74D4FA",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.88,
   "yaw": 77.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0_HS_1_0_0_map.gif",
      "width": 15,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1381B9B6_18AF_05CF_41A8_F778046546FC, this.camera_07532591_1D74_7660_41A5_336F8FB0DA5A); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_0_HS_1_0.png",
      "width": 196,
      "height": 198,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.88,
   "yaw": 77.7,
   "pitch": -4.45
  }
 ],
 "id": "overlay_0CA93531_18B1_02C5_4168_7154AF9EB875",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 19.34,
   "yaw": -26.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 20.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80_1_HS_2_0.png",
      "width": 687,
      "height": 712,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 19.34,
   "yaw": -26.06,
   "pitch": 20.68
  }
 ],
 "id": "overlay_0346735F_18D1_057D_41B1_A5134F755C16",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.5,
   "yaw": -53.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7, this.camera_04F5C561_1D74_76A3_41B9_ED0325FA8802); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0_HS_0_0.png",
      "width": 182,
      "height": 180,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.5,
   "yaw": -53.71,
   "pitch": 2.8
  }
 ],
 "id": "overlay_0B7D98A4_1CC4_EE42_41B2_621835202F1E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.48,
   "yaw": 11.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0_HS_1_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 4.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600, this.camera_04855569_1D74_76A0_41B0_D2A106B33BA4); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0_HS_1_0.png",
      "width": 182,
      "height": 139,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.48,
   "yaw": 11.8,
   "pitch": 4.88
  }
 ],
 "id": "overlay_0B1E069A_1CC4_2246_41AB_BD2281E5159F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 21.28,
   "yaw": 70.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 39.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB_0_HS_2_0.png",
      "width": 911,
      "height": 558,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 21.28,
   "yaw": 70.84,
   "pitch": 39.11
  }
 ],
 "id": "overlay_034E9BD0_1CCC_E1C2_41AE_606BC50AC762",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.76,
   "yaw": 151.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2, this.camera_04518510_1D74_7660_41A7_74641A2CC698); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_0_0.png",
      "width": 202,
      "height": 172,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.76,
   "yaw": 151.56,
   "pitch": -19.12
  }
 ],
 "id": "overlay_0BD455E8_18BF_0D43_419D_097E09C860B3",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.94,
   "yaw": -172.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_1_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF, this.camera_04615518_1D74_7660_41B5_FBFA0D0E80C6); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_1_0.png",
      "width": 209,
      "height": 166,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.94,
   "yaw": -172.97,
   "pitch": -19.42
  }
 ],
 "id": "overlay_0B98F896_18B3_03CF_41B1_91ED517E4040",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.62,
   "yaw": -66.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_2_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80, this.camera_042C0536_1D74_76A0_4194_98E4576D9816); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_2_0.png",
      "width": 222,
      "height": 191,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.62,
   "yaw": -66.21,
   "pitch": -7.61
  }
 ],
 "id": "overlay_0B4E1838_18B1_02C3_414D_9BDC730D1598",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 7.25,
   "yaw": 5.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_3_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1381B9B6_18AF_05CF_41A8_F778046546FC, this.camera_04028527_1D74_76A0_41B3_274A50108908); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_3_0.png",
      "width": 241,
      "height": 191,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 7.25,
   "yaw": 5.01,
   "pitch": -4.66
  }
 ],
 "id": "overlay_0C30E519_18B1_02C5_41B7_026F55820CA2",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.27,
   "yaw": -130.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149F086B_18B1_0345_41AD_18445899B6AA, this.camera_0412052E_1D74_76A0_419F_C367D5BCBAFF); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_5_0.png",
      "width": 176,
      "height": 211,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.27,
   "yaw": -130.13,
   "pitch": -7.02
  }
 ],
 "id": "overlay_0C706791_1CC4_6245_41A0_0DB877BCF4A4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.09,
   "yaw": 132.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_6_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_6_0.png",
      "width": 170,
      "height": 146,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.09,
   "yaw": 132.57,
   "pitch": -6.52
  }
 ],
 "id": "overlay_0AA89EDB_1CC4_23C6_41BB_1446026874F0",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.69,
   "yaw": 64.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC952E_18AF_02DF_41A6_56790046C980, this.camera_0473051F_1D74_7660_4189_6025F528DBC8); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F_0_HS_7_0.png",
      "width": 189,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.69,
   "yaw": 64.03,
   "pitch": -4.96
  }
 ],
 "id": "overlay_0BDE96FD_1CC4_23C2_418B_02C678B5A96F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 12.49,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_0D90A292_1D1F_D260_41A8_896AB34CD4A6",
 "roll": -0.53,
 "loop": true,
 "vfov": 3.88,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_0D90A292_1D1F_D260_41A8_896AB34CD4A6_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -8.63,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": -8.09,
 "yaw": -154.83,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_12F162EE_1D14_53A0_419C_E9D32392C33A.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 6.96,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.39,
   "yaw": -168.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -18.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149DA33C_18B1_06C3_4194_14F35D3FF621, this.camera_0BF3B6CB_1D74_73E0_419E_892A5825E24C); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303_0_HS_0_0.png",
      "width": 189,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.39,
   "yaw": -168.52,
   "pitch": -18.92
  }
 ],
 "id": "overlay_0FCD66CB_18D7_0F45_41B8_68B454F135A9",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.67,
   "yaw": -168.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -8.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D, this.camera_0BE996BD_1D74_73A0_41B2_2EA5CDC99ADE); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0_HS_0_0.png",
      "width": 78,
      "height": 72,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.67,
   "yaw": -168.4,
   "pitch": -8.4
  }
 ],
 "id": "overlay_3C70E9A7_1CCC_6E4D_41BB_E1B9E9C2557B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.69,
   "yaw": 159.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 6.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE, this.camera_0BE446C4_1D74_73E0_41BB_D2DF16A6422B); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14D14242_18B3_0747_4187_D0ACA310548C_0_HS_1_0.png",
      "width": 78,
      "height": 72,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.69,
   "yaw": 159.43,
   "pitch": 6.36
  }
 ],
 "id": "overlay_3DF6460A_1CCC_2247_41B9_08D010B33F84",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 7.42,
   "yaw": 135.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0_HS_0_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C, this.camera_043F953D_1D74_76A0_41AF_A5A93267C065); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6_0_HS_0_0.png",
      "width": 123,
      "height": 102,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 7.42,
   "yaw": 135.73,
   "pitch": -7.33
  }
 ],
 "id": "overlay_0F6221BF_1CC4_21BD_41AF_EDA1A7B6245F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.85,
   "yaw": 62.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F, this.camera_0A5A06FF_1D74_73A0_41B8_762256248EBE); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0_HS_0_0.png",
      "width": 196,
      "height": 185,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.85,
   "yaw": 62.26,
   "pitch": -7.69
  }
 ],
 "id": "overlay_0CEF3722_18B3_0EC7_4153_CC833CE69D33",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.1,
   "yaw": 103.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC8F45_18AF_1D4D_41B3_630CAAA10D80, this.camera_0A547707_1D74_7260_41A5_F6FC764CB0B5); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_0_HS_1_0.png",
      "width": 137,
      "height": 146,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.1,
   "yaw": 103.96,
   "pitch": -6.63
  }
 ],
 "id": "overlay_0CA9F648_18B1_0F43_418A_7F48611AD3F8",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 27.51,
   "yaw": 154.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 24.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1381B9B6_18AF_05CF_41A8_F778046546FC_1_HS_2_0.png",
      "width": 1007,
      "height": 908,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 27.51,
   "yaw": 154.62,
   "pitch": 24.81
  }
 ],
 "id": "overlay_0346A23D_18D1_073D_41B5_43D43627ED9F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.93,
   "yaw": -113.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -12.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F, this.camera_0B12568A_1D74_7260_41B9_2F1A2B6DA3BD); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0_HS_0_0.png",
      "width": 235,
      "height": 237,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.93,
   "yaw": -113.9,
   "pitch": -12.03
  }
 ],
 "id": "overlay_0B316CE7_18B1_034D_41A9_1CDC194EA95A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.7,
   "yaw": -97.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_1_HS_2_0.png",
      "width": 189,
      "height": 192,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.7,
   "yaw": -97.97,
   "pitch": -2.6
  }
 ],
 "id": "overlay_05338C38_18F1_02C3_419A_CC4084F8A3F3",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.07,
   "yaw": -66.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_1_HS_3_0.png",
      "width": 169,
      "height": 198,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.07,
   "yaw": -66.7,
   "pitch": -6.53
  }
 ],
 "id": "overlay_0533A3E5_18F1_054D_41A9_AFEA877E44CE",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.29,
   "yaw": -124.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149F086B_18B1_0345_41AD_18445899B6AA, this.camera_0B04B682_1D74_7260_4199_927F428F9D58); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13BC952E_18AF_02DF_41A6_56790046C980_0_HS_4_0.png",
      "width": 176,
      "height": 211,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.29,
   "yaw": -124.82,
   "pitch": -5.25
  }
 ],
 "id": "overlay_0C7102B0_1CC4_2243_41A2_699E2CB49991",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.49,
   "yaw": -14.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_0_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7, this.camera_05B7B501_1D74_7660_41A4_73C53DE58BEC); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_0_0.png",
      "width": 90,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.49,
   "yaw": -14.17,
   "pitch": -3.39
  }
 ],
 "id": "overlay_0B4EF4C8_1CC4_67C2_41A0_3F088D100A76",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.53,
   "yaw": 104.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE, this.camera_05AF24F2_1D74_77A0_41B8_006FCE328A18); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_1_0.png",
      "width": 74,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.53,
   "yaw": 104.16,
   "pitch": -1.9
  }
 ],
 "id": "overlay_05DE13DF_1CFC_21FD_41B0_08DEB6668E3E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.53,
   "yaw": 95.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C, this.camera_0592E4EB_1D74_77A0_41AA_1CEC0B8E55B6); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_2_0.png",
      "width": 74,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.53,
   "yaw": 95.6,
   "pitch": -0.43
  }
 ],
 "id": "overlay_06C790F0_1CFC_5FC3_4175_F54D3C1795C0",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.53,
   "yaw": 84.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 1.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D, this.camera_05BBF4FA_1D74_77A0_4199_87D5394DAF00); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_3_0.png",
      "width": 74,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.53,
   "yaw": 84.39,
   "pitch": 1.34
  }
 ],
 "id": "overlay_065E6022_1CFC_3E46_4177_FE8A8EA87BE2",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.5,
   "yaw": -35.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_4_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 1.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_4_0.png",
      "width": 90,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.5,
   "yaw": -35.12,
   "pitch": 1.33
  }
 ],
 "id": "overlay_07EA129F_1CFC_227E_41B5_EB358D4276F8",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.49,
   "yaw": -50.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_5_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 3.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600, this.camera_0447D509_1D74_7660_41B2_F74CA519D705); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_5_0.png",
      "width": 90,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.49,
   "yaw": -50.76,
   "pitch": 3.4
  }
 ],
 "id": "overlay_06D8241F_1CFC_267E_41A6_3FD4F5698DFB",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 12.32,
   "yaw": -99.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_6_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 63.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10, this.camera_058794E3_1D74_77A0_419D_B4642FF3B233); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2_0_HS_6_0.png",
      "width": 453,
      "height": 277,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 12.32,
   "yaw": -99.7,
   "pitch": 63.3
  }
 ],
 "id": "overlay_034C409B_1CCB_DE46_41B0_EF9C8B99DE9A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.57,
   "yaw": -104.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -33.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_0_0.png",
      "width": 222,
      "height": 218,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.57,
   "yaw": -104.48,
   "pitch": -33.49
  }
 ],
 "id": "overlay_03E71369_18DF_0545_4189_50C58E53111B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.07,
   "yaw": -36.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13806B37_18B1_06CD_41B6_1D32A840C1B6, this.camera_05D384BE_1D74_77A0_41B4_4A0D6EFEBDC2); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_1_0.png",
      "width": 203,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.07,
   "yaw": -36.39,
   "pitch": -7.02
  }
 ],
 "id": "overlay_0DD7195E_1CCB_EEFF_41B9_89AA49F5C8B7",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.08,
   "yaw": -21.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149C6078_18B1_0343_41B5_19EE27DDF44C, this.camera_05CFE4AA_1D74_77A0_41B0_21B75612FE31); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_2_0.png",
      "width": 203,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.08,
   "yaw": -21.34,
   "pitch": -6.43
  }
 ],
 "id": "overlay_0D586B7B_1CCC_62C5_4191_6D1AE2C63818",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.87,
   "yaw": 170.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4, this.camera_05C564B7_1D74_77A0_41B4_6421D4E85220); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_3_0.png",
      "width": 203,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.87,
   "yaw": 170.46,
   "pitch": -16.47
  }
 ],
 "id": "overlay_0D0BB2FB_1CCC_23C6_41B7_DB08DDAE826B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.33,
   "yaw": 83.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -29.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_4_0.png",
      "width": 203,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.33,
   "yaw": 83.41,
   "pitch": -29.45
  }
 ],
 "id": "overlay_0E80E475_1CCC_E6C2_4196_A5354320A8FF",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.12,
   "yaw": 88.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C_0_HS_5_0.png",
      "width": 203,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.12,
   "yaw": 88.72,
   "pitch": -2.01
  }
 ],
 "id": "overlay_0C22A1DD_1CCC_21FD_41B1_BCD22A0BDCB3",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 20.84,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_0DD60BC9_1D1C_51E0_419D_F620FE9806CA",
 "roll": 22.17,
 "loop": true,
 "vfov": 4.69,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_0DD60BC9_1D1C_51E0_419D_F620FE9806CA_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -11.55,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 56.34,
 "yaw": 49.53,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_12F162EE_1D14_53A0_419C_E9D32392C33A.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 6.63,
 "data": {
  "label": "Video"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": 58,
 "maxWidth": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": 58,
 "maxWidth": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "visible": false,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "maxHeight": 37,
 "verticalAlign": "middle",
 "width": 100,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "right": 30,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 8,
 "height": 75,
 "class": "IconButton",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "data": {
  "name": "IconButton VR"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": 58,
 "maxWidth": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.92,
   "yaw": 90.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13920B52_18B1_0547_41A7_F7149F2563AA, this.camera_0A0E971D_1D74_7260_41A5_2F9E8A0C2BAB); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0_HS_0_0.png",
      "width": 130,
      "height": 132,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 3.92,
   "yaw": 90.37,
   "pitch": -2.09
  }
 ],
 "id": "overlay_0397F030_18D1_02C3_4191_46DD924C75F4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.51,
   "yaw": 91.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0_HS_1_0.png",
      "width": 156,
      "height": 166,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.51,
   "yaw": 91.65,
   "pitch": -17.06
  }
 ],
 "id": "overlay_038B163B_18D1_0EC6_41B4_6CC81EA3F73C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.94,
   "yaw": -96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -13.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A_0_HS_2_0.png",
      "width": 203,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.94,
   "yaw": -96,
   "pitch": -13.81
  }
 ],
 "id": "overlay_0E7998DD_1CCC_2FFD_419F_CF0762278118",
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationX": 17.15,
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_0DB264A6_1D1C_B7A0_41B7_3A7191868675",
 "roll": -11.88,
 "loop": true,
 "vfov": 5.53,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_0DB264A6_1D1C_B7A0_41B7_3A7191868675_t.jpg",
    "width": 960,
    "height": 540,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "pitch": -16.06,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": -25.67,
 "yaw": 138.98,
 "video": {
  "width": 960,
  "height": 540,
  "class": "VideoResource",
  "mp4Url": "media/video_12F162EE_1D14_53A0_419C_E9D32392C33A.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 8.23,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.84,
   "yaw": -102.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -8.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13A4DADD_18B1_077D_41AC_8C9F22E8B303, this.camera_08BE3620_1D74_72A0_417A_196420BFE0C8); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0_HS_0_0.png",
      "width": 97,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.84,
   "yaw": -102.79,
   "pitch": -8.49
  }
 ],
 "id": "overlay_0E8E9069_18D1_0345_4196_8BB2E256AC6F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.53,
   "yaw": -27.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4, this.camera_08A47619_1D74_7260_41B3_79BA9A5E10BD); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149DA33C_18B1_06C3_4194_14F35D3FF621_0_HS_1_0.png",
      "width": 74,
      "height": 92,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.53,
   "yaw": -27.15,
   "pitch": -1.51
  }
 ],
 "id": "overlay_016E8566_18D1_0D4F_419D_B13243553616",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.93,
   "yaw": 18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0_HS_0_0.png",
      "width": 163,
      "height": 165,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.93,
   "yaw": 18,
   "pitch": -0.83
  }
 ],
 "id": "overlay_08F87062_1CC4_7EC6_41AC_1B06173BB7C9",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.34,
   "yaw": -158.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -32.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0_HS_1_0.png",
      "width": 248,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.34,
   "yaw": -158.78,
   "pitch": -32.11
  }
 ],
 "id": "overlay_0F317158_1CC4_3EC3_41B8_E7CC3BA37108",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.87,
   "yaw": 157.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0_HS_2_0.png",
      "width": 196,
      "height": 178,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.87,
   "yaw": 157.85,
   "pitch": -6.33
  }
 ],
 "id": "overlay_085C7E72_1CC5_E2C7_4181_1CDDB8046C70",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.89,
   "yaw": -115.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A400A4_18B1_03C3_41B7_DB7D3B1F8226_0_HS_3_0.png",
      "width": 163,
      "height": 165,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.89,
   "yaw": -115.08,
   "pitch": -6.73
  }
 ],
 "id": "overlay_09CBB0F6_1CDC_3FCF_41BC_9BD39618F86A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.82,
   "yaw": -127.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -22.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9, this.camera_0B85A6DA_1D74_73E0_41A8_D2FA832AB0FC); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0_HS_0_0.png",
      "width": 137,
      "height": 146,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 3.82,
   "yaw": -127.89,
   "pitch": -22.38
  }
 ],
 "id": "overlay_0441DE62_18D1_1F47_41B6_02987E83064F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.28,
   "yaw": -106.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190_0_HS_1_0.png",
      "width": 143,
      "height": 165,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.28,
   "yaw": -106.83,
   "pitch": -7.7
  }
 ],
 "id": "overlay_3A2A31C7_1CCC_61CE_41BA_19AF81235A84",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 2.96,
   "yaw": 90.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0_HS_0_0_0_map.gif",
      "width": 15,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0_HS_0_0.png",
      "width": 98,
      "height": 119,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 2.96,
   "yaw": 90.3,
   "pitch": -0.72
  }
 ],
 "id": "overlay_0E74AE75_1CCC_22C2_41B5_89CB51F3846A",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.5,
   "yaw": 88.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -42.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0_HS_1_0.png",
      "width": 203,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.5,
   "yaw": 88.72,
   "pitch": -42.73
  }
 ],
 "id": "overlay_0E3BEDB4_1CCC_2642_41A3_FCCCA18EFA3E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.62,
   "yaw": 89.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -23.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_139105DF_18B1_0D7D_41B0_E6F91B186C7A, this.camera_0B09867B_1D74_72A0_41A9_8C1440AB00DE); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13920B52_18B1_0547_41A7_F7149F2563AA_0_HS_2_0.png",
      "width": 203,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.62,
   "yaw": 89.9,
   "pitch": -23.25
  }
 ],
 "id": "overlay_0F8725ED_1CCC_21DD_41A7_31D0ECAF3AE7",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.89,
   "yaw": -79.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14D14242_18B3_0747_4187_D0ACA310548C, this.camera_0892B5F9_1D74_71A0_41A5_48DDC7561516); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0_HS_0_0.png",
      "width": 81,
      "height": 76,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.89,
   "yaw": -79.97,
   "pitch": -5.74
  }
 ],
 "id": "overlay_3CAC3C99_1CCC_6645_4171_073488D09D89",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.91,
   "yaw": 51.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C, this.camera_08A92609_1D74_7260_4181_487AA6D1E982); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0_HS_1_0.png",
      "width": 81,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.91,
   "yaw": 51.63,
   "pitch": -0.53
  }
 ],
 "id": "overlay_3F0A0D26_1CC4_664F_419B_04379F207148",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.74,
   "yaw": 45.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 15.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE, this.camera_08A30610_1D74_7260_41A7_A68174C672B4); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0_HS_2_0.png",
      "width": 81,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.74,
   "yaw": 45.44,
   "pitch": 15.4
  }
 ],
 "id": "overlay_39269D40_1CDB_E6C2_41B0_FD289F201B27",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.86,
   "yaw": 166.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 8.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7, this.camera_089EE5F0_1D74_71A0_41BB_69817864B000); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0_HS_3_0.png",
      "width": 81,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.86,
   "yaw": 166.42,
   "pitch": 8.62
  }
 ],
 "id": "overlay_398FEF18_1CDC_2242_41B2_5FD557BAD29F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.76,
   "yaw": 137.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 14.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2, this.camera_0894C600_1D74_7260_41AD_E15FF1B56300); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_148D050F_18B3_02DD_41A9_225DE0915B2D_0_HS_4_0.png",
      "width": 81,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.76,
   "yaw": 137.21,
   "pitch": 14.22
  }
 ],
 "id": "overlay_38F950DB_1CDC_5FC5_41A6_2AFB99951153",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.2,
   "yaw": -54.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -11.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198, this.camera_04EBB552_1D74_76E0_41B9_BA7710197882); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_1_HS_0_0.png",
      "width": 87,
      "height": 92,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.2,
   "yaw": -54.59,
   "pitch": -11.94
  }
 ],
 "id": "overlay_042C0BB1_18D3_05C5_41B8_33F2AEF4E954",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.31,
   "yaw": -53.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -29.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC9096_18AF_03CF_419B_A32D1531C5EF, this.camera_04CE2545_1D74_76E0_419A_4FE7D2624E33); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0_HS_1_0.png",
      "width": 100,
      "height": 101,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.31,
   "yaw": -53.02,
   "pitch": -29.35
  }
 ],
 "id": "overlay_05CAD0B7_18D1_03CD_4153_A3839D652971",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.79,
   "yaw": -109.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0_HS_2_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -11.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC8AC5_18AF_074D_41AD_157ADF8BC06F, this.camera_04D9D54C_1D74_76E0_419C_581E38346012); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0_HS_2_0.png",
      "width": 97,
      "height": 82,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.79,
   "yaw": -109.48,
   "pitch": -11.05
  }
 ],
 "id": "overlay_05FF1B49_18D1_0545_41AD_87C35E37983B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.89,
   "yaw": -104.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0_HS_3_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC952E_18AF_02DF_41A6_56790046C980, this.camera_04E5955A_1D74_76E0_41A8_D892DF38FF18); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0_HS_3_0.png",
      "width": 97,
      "height": 82,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.89,
   "yaw": -104.46,
   "pitch": -3.38
  }
 ],
 "id": "overlay_3928159A_1CCC_2646_41BB_56041DDC224C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.25,
   "yaw": -136.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0_HS_4_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149F086B_18B1_0345_41AD_18445899B6AA_0_HS_4_0.png",
      "width": 71,
      "height": 66,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.25,
   "yaw": -136.23,
   "pitch": -10.85
  }
 ],
 "id": "overlay_3BA613CA_1CCC_21C7_41A2_2B6883CD9D77",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.28,
   "yaw": 24.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149DA33C_18B1_06C3_4194_14F35D3FF621, this.camera_0B701673_1D74_72A0_41B3_FAB05CAC0D0D); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_0_0.png",
      "width": 176,
      "height": 153,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.28,
   "yaw": 24.08,
   "pitch": -5.95
  }
 ],
 "id": "overlay_0DAB7165_18D1_054D_41AB_7E63E9A36376",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 7.03,
   "yaw": 53.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9, this.camera_0B7A066C_1D74_72A0_4193_5B9B81DB0CCA); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_1_0.png",
      "width": 235,
      "height": 198,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 7.03,
   "yaw": 53.88,
   "pitch": -7.22
  }
 ],
 "id": "overlay_0DD5B1EC_18D1_0543_41A6_0F4FA6643000",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.89,
   "yaw": -154.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -30.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13930C6F_18B1_035D_41B4_4ED13D53C97C, this.camera_0B638664_1D74_72A0_41B3_D57E5D43281F); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_2_0.png",
      "width": 189,
      "height": 198,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.89,
   "yaw": -154.93,
   "pitch": -30.83
  }
 ],
 "id": "overlay_0D802EE7_18D1_3F4D_41B8_5A232CB1D7D6",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.13,
   "yaw": 94.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 12.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1391783F_18B1_033D_41B0_2024E92953E3, this.camera_0B68765D_1D74_72E0_41BB_AFF6A357549C); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_3_0.png",
      "width": 208,
      "height": 192,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.13,
   "yaw": 94.71,
   "pitch": 12.94
  }
 ],
 "id": "overlay_0DB58AE8_18D1_0743_41B1_4B87DB6D2EA1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.85,
   "yaw": -162.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -8.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_4_0.png",
      "width": 162,
      "height": 172,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.85,
   "yaw": -162.72,
   "pitch": -8.01
  }
 ],
 "id": "overlay_34979ED5_1D3C_23CD_41B9_DD0F5240EB2B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.58,
   "yaw": -156.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -11.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4_0_HS_5_0.png",
      "width": 189,
      "height": 198,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.58,
   "yaw": -156.72,
   "pitch": -11.35
  }
 ],
 "id": "overlay_3479EDBE_1D3C_61BF_41B5_C0C12D8370BE",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.87,
   "yaw": 85.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0_HS_0_0_0_map.gif",
      "width": 15,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1392DE46_18B1_1F4F_41B5_244B99347242_0_HS_0_0.png",
      "width": 196,
      "height": 205,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.87,
   "yaw": 85.28,
   "pitch": -6.15
  }
 ],
 "id": "overlay_04C35FB4_18D1_1DC3_4189_6B4483FB148F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.54,
   "yaw": 34.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 20.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1382942F_18B1_02DD_41A3_962FF41B8EE2, this.camera_0A60370E_1D74_7260_41AF_B718173219BE); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0_HS_0_0.png",
      "width": 196,
      "height": 166,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.54,
   "yaw": 34.91,
   "pitch": 20.22
  }
 ],
 "id": "overlay_0A7F9245_18B1_074D_41A2_600A212011F5",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6.35,
   "yaw": 12.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 12.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0_HS_1_0.png",
      "width": 215,
      "height": 224,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.35,
   "yaw": 12.29,
   "pitch": 12.16
  }
 ],
 "id": "overlay_0A58D285_18B3_07CD_41B3_272878D2968C",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.35,
   "yaw": 42.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -28.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4, this.camera_0A726716_1D74_7260_41A5_A9F510241056); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391783F_18B1_033D_41B0_2024E92953E3_0_HS_2_0.png",
      "width": 202,
      "height": 185,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.35,
   "yaw": 42.59,
   "pitch": -28.65
  }
 ],
 "id": "overlay_0C5FB772_18AF_0D47_41B0_A0B3D15C8ADF",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.49,
   "yaw": -112.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_0_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_0_0.png",
      "width": 182,
      "height": 139,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.49,
   "yaw": -112.73,
   "pitch": -3.98
  }
 ],
 "id": "overlay_06104351_1CFD_E2C2_4199_4FFD10C66E64",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.49,
   "yaw": -103.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_1_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D, this.camera_0A3AF733_1D74_72A0_41AD_F9D8E747DE89); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_1_0.png",
      "width": 182,
      "height": 139,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.49,
   "yaw": -103.88,
   "pitch": -4.57
  }
 ],
 "id": "overlay_062B0D0A_1CFC_2646_41A4_C6258CFFE110",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.5,
   "yaw": -79.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_2_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 3.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_2_0.png",
      "width": 182,
      "height": 139,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.5,
   "yaw": -79.97,
   "pitch": 3.11
  }
 ],
 "id": "overlay_009D894E_1CFC_6EDF_41B5_16DC3D07D859",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.5,
   "yaw": -40.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_3_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 1.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2, this.camera_0A1E7725_1D74_72A0_4197_69D9C415743B); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_3_0.png",
      "width": 182,
      "height": 139,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.5,
   "yaw": -40.14,
   "pitch": 1.33
  }
 ],
 "id": "overlay_07975423_1CFC_2645_41A8_6E436E07BC7F",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.46,
   "yaw": 96.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_4_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB, this.camera_0A2B172C_1D74_72A0_4186_638B153BCA6D); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_4_0.png",
      "width": 182,
      "height": 139,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.46,
   "yaw": 96.48,
   "pitch": -6.93
  }
 ],
 "id": "overlay_01C5F7EC_1CC4_61C2_41A8_99BF3778EA1D",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.5,
   "yaw": 53.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_5_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14992B7A_18B1_0547_41AE_14E34FA72600, this.camera_0A35C73B_1D74_72A0_41A6_1A9117C02E01); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_5_0.png",
      "width": 182,
      "height": 139,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.5,
   "yaw": 53.4,
   "pitch": -0.44
  }
 ],
 "id": "overlay_0092B69C_1CC4_E243_41BA_21F2B48F629D",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 18.16,
   "yaw": 90.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_6_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 48.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_134A5134_18AF_02C3_4166_0A67229FC6D7_0_HS_6_0.png",
      "width": 911,
      "height": 558,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 18.16,
   "yaw": 90.32,
   "pitch": 48.55
  }
 ],
 "id": "overlay_034AE13C_1CCB_DE43_41A7_780DFF593502",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.5,
   "yaw": 129.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0_HS_0_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_134A5134_18AF_02C3_4166_0A67229FC6D7, this.camera_0B40763F_1D74_72A0_41A2_B074317D4678); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0_HS_0_0.png",
      "width": 90,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.5,
   "yaw": 129.83,
   "pitch": -1.91
  }
 ],
 "id": "overlay_0B41E684_1CC4_6242_4192_986C283F64C0",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.48,
   "yaw": 89.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0_HS_1_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13B64C2E_18AF_02DF_41B2_C255A05965FB, this.camera_08B5762F_1D74_72A0_41B2_2B1A3676231F); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0_HS_1_0.png",
      "width": 90,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.48,
   "yaw": 89.4,
   "pitch": -4.86
  }
 ],
 "id": "overlay_0B30C17E_1CC4_3EBF_41BA_A09C948A6BF0",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.5,
   "yaw": 169.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0_HS_2_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 1.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2, this.camera_0B4F3637_1D74_72A0_4197_E9F38BDFE875); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0_HS_2_0.png",
      "width": 90,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.5,
   "yaw": 169.07,
   "pitch": 1.92
  }
 ],
 "id": "overlay_05340193_1CFC_7E45_41B1_A593A95354B4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 22.31,
   "yaw": -93.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 35.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14992B7A_18B1_0547_41AE_14E34FA72600_0_HS_3_0.png",
      "width": 453,
      "height": 277,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 22.31,
   "yaw": -93.21,
   "pitch": 35.56
  }
 ],
 "id": "overlay_03740DB7_1CCC_264D_419C_7EAF09F71A39",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.13,
   "yaw": 152.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13BC9666_18AF_0F4F_418F_3E2D83A8B198, this.camera_0B5C764E_1D74_72E0_4191_50EDAB2CBB9B); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0_HS_0_0.png",
      "width": 137,
      "height": 140,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.13,
   "yaw": 152.75,
   "pitch": -0.44
  }
 ],
 "id": "overlay_004FF155_18D1_054D_417B_5DA2536322E4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.82,
   "yaw": 153.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -8.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_13A43576_18B1_0D4F_4197_877C8A2EB970, this.camera_0B50B655_1D74_72E0_41BC_CA4A6CE77F1A); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_0_HS_1_0.png",
      "width": 195,
      "height": 172,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.82,
   "yaw": 153.32,
   "pitch": -8.59
  }
 ],
 "id": "overlay_00627F73_18D3_3D45_41A0_ECAF5EDF4D7E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 16.68,
   "yaw": -161.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 38.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2, this.camera_0B5A3647_1D74_72E0_4189_F2CA534CED1F); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_13A42FE8_18B1_1D43_41B4_F03268C68A10_1_HS_2_0.png",
      "width": 713,
      "height": 771,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 16.68,
   "yaw": -161.11,
   "pitch": 38.97
  }
 ],
 "id": "overlay_0341A4A4_18D7_03C3_41B4_527C6E64265B",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.68,
   "yaw": 144.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C, this.camera_0588B4DC_1D74_77E0_41B2_3927A7475CD8); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0_HS_0_0.png",
      "width": 78,
      "height": 72,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.68,
   "yaw": 144.68,
   "pitch": -7.81
  }
 ],
 "id": "overlay_3DCAA1AE_1CCC_7E5F_41AF_CCC8AB7F20AF",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.69,
   "yaw": 85.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2, this.camera_05F314D5_1D74_77E0_4191_03741F3E2CED); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0_HS_1_0.png",
      "width": 78,
      "height": 72,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.69,
   "yaw": 85.37,
   "pitch": -6.63
  }
 ],
 "id": "overlay_3E2499F7_1CCC_21CD_418A_984908165C97",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.7,
   "yaw": 165.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14D14242_18B3_0747_4187_D0ACA310548C, this.camera_05E414CD_1D74_77E0_4194_165C5E7E258D); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0_HS_2_0.png",
      "width": 78,
      "height": 72,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.7,
   "yaw": 165.63,
   "pitch": -5.44
  }
 ],
 "id": "overlay_3FA9938E_1CCC_225F_41AB_B6F711A57ECD",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.7,
   "yaw": 158.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D, this.camera_05EE94C6_1D74_77E0_41B7_95BCA05B14F9); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0_HS_3_0.png",
      "width": 78,
      "height": 72,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.7,
   "yaw": 158.55,
   "pitch": -5.74
  }
 ],
 "id": "overlay_3FBA75AF_1CCC_E65E_41A5_8233FFF3D75E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 21.98,
   "yaw": 49.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0_HS_4_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 36.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE_0_HS_4_0.png",
      "width": 453,
      "height": 277,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 21.98,
   "yaw": 49.3,
   "pitch": 36.74
  }
 ],
 "id": "overlay_3E9B32DE_1CC4_23FF_4192_39B8990919E7",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.31,
   "yaw": 176.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1482F578_18B3_0D43_41AF_2DA0DC5AE9AE, this.camera_053B147A_1D74_76A0_419D_8D463A4D88B3); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_0_0.png",
      "width": 87,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.31,
   "yaw": 176.25,
   "pitch": 2.23
  }
 ],
 "id": "overlay_018DAAC3_1CC4_63C5_41A0_9B6A37F741D6",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.28,
   "yaw": 50.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 5.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_1_0.png",
      "width": 87,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.28,
   "yaw": 50.84,
   "pitch": 5.77
  }
 ],
 "id": "overlay_0199BCA4_1CC4_2642_4177_DE7481418172",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.31,
   "yaw": 24.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_148D050F_18B3_02DD_41A9_225DE0915B2D, this.camera_0530A492_1D74_7660_41A6_E90B65380EB5); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_2_0.png",
      "width": 87,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.31,
   "yaw": 24.88,
   "pitch": -0.13
  }
 ],
 "id": "overlay_012A1212_1CC4_2246_4182_B529A1457DFE",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.91,
   "yaw": -15.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 22.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_3_0.png",
      "width": 87,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.91,
   "yaw": -15.55,
   "pitch": 22.29
  }
 ],
 "id": "overlay_036ACB87_1CC4_624E_41B2_0A258A72FDE1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.9,
   "yaw": -34.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_4_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 24.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_149E1D36_18B1_02CF_41B5_AC8B252269A2, this.camera_052D7463_1D74_76A0_41BC_D571F3A12111); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_4_0.png",
      "width": 107,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.9,
   "yaw": -34.14,
   "pitch": 24.65
  }
 ],
 "id": "overlay_026B9F9A_1CC4_E247_41BB_A103CFCA9CE9",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.89,
   "yaw": -25.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 22.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_5_0.png",
      "width": 87,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.89,
   "yaw": -25.29,
   "pitch": 22.88
  }
 ],
 "id": "overlay_027EA2B0_1CC4_E243_41BC_8F423B69D109",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 7.87,
   "yaw": -66.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_6_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 73.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_149C5DB8_18B1_1DC3_41B2_02AF7A48066C_0_HS_6_0.png",
      "width": 453,
      "height": 277,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 7.87,
   "yaw": -66.36,
   "pitch": 73.34
  }
 ],
 "id": "overlay_035DFBE1_1CC4_21C5_4167_E33F091AFE7E",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.94,
   "yaw": 155.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -13.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0_HS_0_0.png",
      "width": 203,
      "height": 120,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.94,
   "yaw": 155.2,
   "pitch": -13.42
  }
 ],
 "id": "overlay_039684E7_18D1_034D_41A5_36044D8D03FB",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.53,
   "yaw": 73.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 19.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0_HS_1_0.png",
      "width": 124,
      "height": 127,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 3.53,
   "yaw": 73.66,
   "pitch": 19.07
  }
 ],
 "id": "overlay_03DEF465_18D3_034D_41B1_F702055AE8D1",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.66,
   "yaw": 96.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 32.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_0_HS_2_0.png",
      "width": 144,
      "height": 146,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 3.66,
   "yaw": 96.98,
   "pitch": 32.34
  }
 ],
 "id": "overlay_03D36361_18D3_0545_41B7_0C303FF5B846",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 28.13,
   "yaw": -46.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_1_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 21.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_139F30B2_18B1_03C7_41B5_EB1548813172_1_HS_3_0.png",
      "width": 1007,
      "height": 908,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 28.13,
   "yaw": -46.62,
   "pitch": 21.84
  }
 ],
 "id": "overlay_03700D56_18D1_1D4F_41AF_76E9D35D1890",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 8.32,
   "yaw": -33.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_139446A1_18B1_0FC5_41B3_EAF53A01D190, this.camera_0B279698_1D74_7260_41AA_BFA9057E83E1); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_1_HS_0_0.png",
      "width": 294,
      "height": 296,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 8.32,
   "yaw": -33.17,
   "pitch": -19.91
  }
 ],
 "id": "overlay_04F0CE46_18D1_1F4F_419C_665522BBC4D4",
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.87,
   "yaw": -146.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1390D25C_18B1_0743_418B_9C7EB9438DB4, this.camera_0B288691_1D74_7260_41B0_494C5408AADB); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1391E0B3_18B1_03C5_41B8_8D235198F8E9_0_HS_1_0.png",
      "width": 196,
      "height": 165,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.87,
   "yaw": -146.66,
   "pitch": -6.33
  }
 ],
 "id": "overlay_3A441B0E_1CCC_625F_4177_558CE6F03240",
 "class": "HotspotPanoramaOverlay"
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": 110,
 "class": "Container",
 "shadow": false,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "gap": 10,
 "data": {
  "name": "button menu sup"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": "85.959%",
 "shadow": false,
 "layout": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "visible": false,
 "gap": 3,
 "data": {
  "name": "-button set"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxHeight": 2,
 "verticalAlign": "middle",
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 53,
 "height": 2,
 "class": "Image",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "data": {
  "name": "white line"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": 51,
 "class": "Container",
 "shadow": false,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 3,
 "data": {
  "name": "-button set container"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "layout": "vertical",
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10,
 "data": {
  "name": "Container X global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "layout": "vertical",
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10,
 "data": {
  "name": "Container X global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "layout": "vertical",
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10,
 "data": {
  "name": "Container X global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarMargin": 2,
 "bottom": "7%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "5%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "layout": "vertical",
 "class": "Container",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10,
 "data": {
  "name": "Container X global"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": 60,
 "maxWidth": 60,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 60,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": 58,
 "maxWidth": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.shareTwitter(window.location.href)",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": 58,
 "maxWidth": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "height": 58,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.shareFacebook(window.location.href)",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 }
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 0,
 "layout": "horizontal",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "fontStyle": "normal",
 "width": 120,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 0,
 "rollOverShadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "label": "HOUSE INFO",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button house info"
 }
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "fontStyle": "normal",
 "width": 130,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "label": "PANORAMA LIST",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "data": {
  "name": "Button panorama list"
 }
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "fontStyle": "normal",
 "width": 90,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "label": "LOCATION",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "data": {
  "name": "Button location"
 }
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "fontStyle": "normal",
 "width": 103,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "label": "FLOORPLAN",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button floorplan"
 }
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "fontStyle": "normal",
 "width": 112,
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Button",
 "shadow": false,
 "height": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "label": "PHOTOALBUM",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button photoalbum"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "data": {
  "name": "-left"
 }
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "data": {
  "name": "-right"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "25%",
 "maxWidth": 60,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "data": {
  "name": "X"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "width": "85%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "data": {
  "name": "-left"
 }
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "width": "50%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "data": {
  "name": "-right"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "25%",
 "maxWidth": 60,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "data": {
  "name": "X"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "header"
 }
},
{
 "paddingBottom": 70,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemThumbnailScaleMode": "fit_outside",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "itemPaddingLeft": 3,
 "verticalAlign": "middle",
 "itemMaxWidth": 1000,
 "itemThumbnailWidth": 220,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingLeft": 70,
 "scrollBarWidth": 10,
 "itemPaddingRight": 3,
 "itemBackgroundColor": [],
 "backgroundColor": [
  "#000000"
 ],
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailGrid",
 "borderSize": 0,
 "itemThumbnailShadow": false,
 "itemLabelPosition": "bottom",
 "itemLabelGap": 7,
 "itemLabelFontColor": "#666666",
 "scrollBarVisible": "rollOver",
 "itemBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "selectedItemThumbnailShadow": true,
 "backgroundOpacity": 0.05,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemOpacity": 1,
 "paddingRight": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "height": "100%",
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailBorderRadius": 0,
 "itemMinHeight": 50,
 "itemMode": "normal",
 "itemLabelFontWeight": "normal",
 "itemHorizontalAlign": "center",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemThumbnailHeight": 125,
 "selectedItemLabelFontWeight": "bold",
 "itemMaxHeight": 1000,
 "itemMinWidth": 50,
 "itemBackgroundOpacity": 0,
 "itemWidth": 220,
 "minHeight": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 10,
 "minWidth": 1,
 "itemLabelTextDecoration": "none",
 "borderRadius": 5,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelFontFamily": "Montserrat",
 "itemHeight": 156,
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "scrollBarColor": "#04A3E1",
 "propagateClick": false,
 "itemLabelFontStyle": "normal",
 "horizontalAlign": "center",
 "itemBorderRadius": 0,
 "itemLabelHorizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "gap": 26,
 "itemVerticalAlign": "top",
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "width": "85%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "data": {
  "name": "-left"
 }
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "width": "15%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 400,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "data": {
  "name": "-right"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "25%",
 "maxWidth": 60,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "data": {
  "name": "X"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "header"
 }
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "MapViewer",
 "transitionMode": "blending",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "borderSize": 0,
 "progressHeight": 6,
 "progressBottom": 2,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "playbackBarBottom": 0,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "header"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container photo"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container photo"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "width": "55%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "data": {
  "name": "-left"
 }
},
{
 "paddingBottom": 20,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "width": "45%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 60,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 460,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "data": {
  "name": "-right"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "25%",
 "maxWidth": 60,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "shadow": false,
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "data": {
  "name": "X"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "verticalAlign": "middle",
 "width": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "data": {
  "name": "Image"
 }
},
{
 "paddingBottom": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container text"
 }
},
{
 "paddingBottom": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 }
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "right": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "progressBottom": 2,
 "borderSize": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowOpacity": 0,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "top": 0,
 "toolTipFontWeight": "normal",
 "bottom": 0,
 "progressBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "playbackBarBottom": 0,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "layout": "horizontal",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10,
 "data": {
  "name": "Container arrows"
 }
},
{
 "paddingBottom": 0,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container text"
 }
},
{
 "paddingBottom": 0,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingBottom": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "verticalAlign": "top",
 "cursor": "hand",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "36.14%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "data": {
  "name": "IconButton X"
 }
},
{
 "paddingBottom": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "url": "https://www.google.com/maps/place/54+Pioneer+Dr,+Port+Ludlow,+WA+98365/@47.9347144,-122.6917191,1211m/data=!3m1!1e3!4m6!3m5!1s0x548fe12c1e7bbcd9:0x2326b9f7ef062699!8m2!3d47.934626!4d-122.6925313!16s%2Fg%2F11f40lmrv4?entry=ttu",
 "scrollEnabled": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "paddingBottom": 0,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container text"
 }
},
{
 "paddingBottom": 0,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingBottom": 0,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxHeight": 60,
 "verticalAlign": "top",
 "cursor": "hand",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "36.14%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "data": {
  "name": "IconButton X"
 }
},
{
 "paddingBottom": 0,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "maxHeight": 60,
 "verticalAlign": "top",
 "cursor": "hand",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "36.14%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "data": {
  "name": "IconButton X"
 }
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "borderSize": 0,
 "progressHeight": 6,
 "progressBottom": 2,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Arial",
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "top": "0%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "playbackBarBottom": 0,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "data": {
  "name": "IconButton <"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "right": 10,
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "data": {
  "name": "IconButton >"
 }
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "borderSize": 0,
 "progressHeight": 6,
 "progressBottom": 2,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Arial",
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minHeight": 1,
 "top": "0%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipPaddingRight": 6,
 "borderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "playbackBarBottom": 0,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "data": {
  "name": "IconButton <"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "right": 10,
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "data": {
  "name": "IconButton >"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "verticalAlign": "top",
 "cursor": "hand",
 "width": "10%",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "right": 20,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "shadow": false,
 "height": "10%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "data": {
  "name": "IconButton X"
 }
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxHeight": 1000,
 "verticalAlign": "bottom",
 "width": "100%",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "data": {
  "name": "Image"
 }
},
{
 "paddingBottom": 0,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container text"
 }
},
{
 "paddingBottom": 0,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 }
},
{
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.58vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "width": "46%",
 "backgroundColorDirection": "vertical",
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "class": "Button",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "height": "9%",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "fontSize": "3vh",
 "backgroundOpacity": 0.7,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "gap": 5,
 "data": {
  "name": "Button"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "maxHeight": 150,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "12%",
 "maxWidth": 150,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "minHeight": 70,
 "paddingLeft": 0,
 "shadow": false,
 "height": "8%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingTop": 0,
 "minWidth": 70,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "data": {
  "name": "IconButton <"
 }
},
{
 "paddingBottom": 0,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": "30%",
 "shadow": false,
 "layout": "absolute",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10,
 "data": {
  "name": "Container separator"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "maxHeight": 150,
 "verticalAlign": "middle",
 "cursor": "hand",
 "width": "12%",
 "maxWidth": 150,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "minHeight": 70,
 "paddingLeft": 0,
 "shadow": false,
 "height": "8%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingTop": 0,
 "minWidth": 70,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "data": {
  "name": "IconButton >"
 }
},
{
 "paddingBottom": 20,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "fontStyle": "normal",
 "width": "46%",
 "backgroundColorDirection": "vertical",
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "class": "Button",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "height": "9%",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "fontSize": "3vh",
 "backgroundOpacity": 0.7,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "gap": 5,
 "data": {
  "name": "Button"
 }
},
{
 "paddingBottom": 20,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">54 Pioneer Dr, </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">Port Ludlow, WA 98365</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">**Welcome to Your Dream Home!** </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Nestled in the heart of Port Ludlow, this custom-built gem offers unparalleled views of the Puget Sound shipping lanes, cruise ships, Admiralty Inlet, and the majestic Cascade Mountains from every window. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Imagine waking up in the primary bedroom, stepping out onto your private balcony, and being greeted by the breathtaking panorama. This sanctuary also features an en-suite bath and a spacious walk-in closet. The open-concept living area, complete with a cozy fireplace, is perfect for those chilly winter days, while the heat pump ensures comfort all year round.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">The gourmet kitchen, boasting Corian countertops, is a cook's delight and the heart of this home. The dining area opens onto a deck, creating an ideal space for entertaining or simply relaxing.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">The lower level could serve as a potential in-law suite, complete with two bedrooms, a family room with custom built-ins, and a wood fireplace. Step out onto the deck and into your private garden area, a serene retreat.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">As a bonus, a club house membership is included, offering access to two pools, a gym, and more. This is not just a house, it's a lifestyle. **Experience it for yourself!**</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "fontStyle": "normal",
 "width": 207,
 "backgroundColorDirection": "vertical",
 "fontFamily": "Bebas Neue Bold",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 59,
 "class": "Button",
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "mode": "push",
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "fontSize": 34,
 "backgroundOpacity": 0.7,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "visible": false,
 "gap": 5,
 "data": {
  "name": "Button"
 }
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": "45%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "80%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "- content"
 }
},
{
 "paddingBottom": 0,
 "id": "Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
 "maxHeight": 1219,
 "verticalAlign": "middle",
 "width": "25.177%",
 "maxWidth": 983,
 "url": "skin/Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": "30.5%",
 "shadow": false,
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "data": {
  "name": "Image4092"
 }
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "72.222%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#233142;font-size:2.35vh;font-family:'Bebas Neue Bold';\">NICHOLAS CUMMINGS</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Bebas Neue Bold';\">Licensed Realtor</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">Tlf.: +1 (253) 225-0548</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC@JohnLScott.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC.JohnLScott.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">Meet Nick Cummings, your trusted real estate advisor in Kitsap County, Washington. As a native of this beautiful region, I bring a deep understanding of its neighborhoods, communities, and market trends. While my experience in the real estate industry may be modest, my passion for helping clients achieve their homeownership dreams is boundless.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">With a genuine love for Kitsap County and its unique charm, I am committed to providing personalized service tailored to each client's needs and preferences. Whether you're buying, selling, or investing in real estate, I am here to guide you every step of the way. Holding a realtor license, I adhere to the highest standards of professionalism and ethics, ensuring a seamless and rewarding real estate experience for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">My approach is rooted in transparency, integrity, and open communication. I take the time to listen to my clients' goals and concerns, empowering them with the knowledge and resources they need to make informed decisions. From navigating the complexities of the local market to negotiating the best possible deals, I am dedicated to achieving exceptional results for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">As your local real estate expert, I am honored to serve the diverse communities of Kitsap County. Whether you're searching for your dream home, selling your property, or exploring investment opportunities, I am here to turn your real estate aspirations into reality. Contact me today, and let's embark on this exciting journey together</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "class": "Player",
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "height": "100%",
 "borderRadius": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "overflow": "visible",
 "propagateClick": true,
 "scripts": {
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "gap": 10,
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

import type { Model } from '@/types';

export const MODELS: Record<string, Model> = {
  "seedance-2-std": {
    "label": "SEEDANCE 2.0 STD",
    "alias": "Seedance 2.0 Standard",
    "family": "SEEDANCE",
    "audioApplies": true,
    "audioIncluded": true,
    "maxDur": 15,
    "eloT2V": 1270,
    "eloI2V": 1347,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "720p",
            "vt": "t2v",
            "rate": 13,
            "status": "verified",
            "source": "magnific.com · medido screenshots 28 abr 2026 · 13.0 cr/Ktok"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "720p",
            "vt": "i2v",
            "rate": 13,
            "status": "verified"
          },
          "v2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "720p",
            "vt": "v2v",
            "rate": 13,
            "status": "approx",
            "note": "rate v2v no medido, asumido igual t2v"
          }
        },
        "1080p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "1080p",
            "vt": "t2v",
            "rate": 14.571,
            "status": "verified",
            "source": "magnific.com · medido screenshots · 5s/10s/15s coherentes en 14.57 cr/Ktok"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "1080p",
            "vt": "i2v",
            "rate": 14.571,
            "status": "verified"
          },
          "v2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "1080p",
            "vt": "v2v",
            "rate": 14.571,
            "status": "approx",
            "note": "rate v2v no medido, asumido igual t2v"
          }
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.3034,
            "status": "verified",
            "source": "fal.ai/models/bytedance/seedance-2.0/text-to-video"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.3024,
            "status": "verified",
            "source": "fal.ai/models/bytedance/seedance-2.0/image-to-video"
          },
          "v2v": {
            "type": "usd_per_sec",
            "value": 0.1814,
            "status": "verified",
            "source": "fal.ai docs",
            "note": "video×0.6 multiplier"
          }
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "720p",
            "vt": "t2v",
            "rate": 1.477,
            "status": "verified",
            "source": "docs.comfy.org"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "720p",
            "vt": "i2v",
            "rate": 1.477,
            "status": "verified"
          },
          "v2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "720p",
            "vt": "v2v",
            "rate": 0.907,
            "status": "verified"
          }
        },
        "1080p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "1080p",
            "vt": "t2v",
            "rate": 3.693,
            "status": "verified"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "1080p",
            "vt": "i2v",
            "rate": 3.693,
            "status": "verified"
          },
          "v2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "1080p",
            "vt": "v2v",
            "rate": 2.268,
            "status": "verified"
          }
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 25,
            "status": "verified",
            "source": "higgsfield + 3 fuentes coincidentes abr 2026"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 25,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 25,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 25,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "seedance-2-fast": {
    "label": "SEEDANCE 2.0 FAST",
    "alias": "Seedance 2.0 Fast",
    "family": "SEEDANCE",
    "audioApplies": true,
    "audioIncluded": true,
    "maxDur": 15,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "720p",
            "vt": "t2v",
            "rate": 10.4,
            "status": "approx",
            "source": "estimado 80% STD verified",
            "note": "pendiente medir"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "720p",
            "vt": "i2v",
            "rate": 10.4,
            "status": "approx"
          },
          "v2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "720p",
            "vt": "v2v",
            "rate": 10.4,
            "status": "approx"
          }
        },
        "1080p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "1080p",
            "vt": "t2v",
            "rate": 11.657,
            "status": "approx",
            "source": "estimado 80% STD verified",
            "note": "pendiente medir"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "1080p",
            "vt": "i2v",
            "rate": 11.657,
            "status": "approx"
          },
          "v2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "1080p",
            "vt": "v2v",
            "rate": 11.657,
            "status": "approx"
          }
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.2419,
            "status": "verified",
            "source": "fal.ai/models/bytedance/seedance-2.0/fast/text-to-video"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.2419,
            "status": "verified"
          },
          "v2v": {
            "type": "usd_per_sec",
            "value": 0.1452,
            "status": "verified",
            "note": "video×0.6 multiplier"
          }
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "720p",
            "vt": "t2v",
            "rate": 1.182,
            "status": "verified",
            "source": "docs.comfy.org"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "720p",
            "vt": "i2v",
            "rate": 1.182,
            "status": "verified"
          },
          "v2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "720p",
            "vt": "v2v",
            "rate": 0.696,
            "status": "verified"
          }
        },
        "1080p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "1080p",
            "vt": "t2v",
            "rate": 2.955,
            "status": "verified"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "1080p",
            "vt": "i2v",
            "rate": 2.955,
            "status": "verified"
          },
          "v2v": {
            "type": "comfy_seedance_token",
            "mode": "fast",
            "res": "1080p",
            "vt": "v2v",
            "rate": 1.74,
            "status": "verified"
          }
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 17,
            "status": "verified",
            "source": "higgsfield + 3 fuentes coincidentes abr 2026"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 17,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 17,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 17,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "seedance-1-pro": {
    "label": "SEEDANCE 1.0 PRO",
    "alias": "Seedance 1.0 Pro",
    "family": "SEEDANCE",
    "audioApplies": false,
    "maxDur": 12,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 100,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 100,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 240,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 240,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "720p",
            "vt": "t2v",
            "rate": 0.5275,
            "status": "verified",
            "source": "docs.comfy.org"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "720p",
            "vt": "i2v",
            "rate": 0.5275,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "1080p",
            "vt": "t2v",
            "rate": 0.5275,
            "status": "verified"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "1080p",
            "vt": "i2v",
            "rate": 0.5275,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "seedance-1-fast": {
    "label": "SEEDANCE 1.0 FAST",
    "alias": "Seedance 1.0 Fast",
    "family": "SEEDANCE",
    "audioApplies": false,
    "maxDur": 12,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 40,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 40,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 90,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 90,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "seedance-1-lite": {
    "label": "SEEDANCE 1.0 LITE",
    "alias": "Seedance 1.0 Lite",
    "family": "SEEDANCE",
    "audioApplies": false,
    "maxDur": 12,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 80,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 80,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 170,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 170,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "720p",
            "vt": "t2v",
            "rate": 0.3798,
            "status": "verified",
            "source": "docs.comfy.org"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "720p",
            "vt": "i2v",
            "rate": 0.3798,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "1080p",
            "vt": "t2v",
            "rate": 0.3798,
            "status": "verified"
          },
          "i2v": {
            "type": "comfy_seedance_token",
            "mode": "std",
            "res": "1080p",
            "vt": "i2v",
            "rate": 0.3798,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "kling-3-0-pro": {
    "label": "KLING 3.0 PRO",
    "alias": "Kling 3.0 Pro (antes O1 Pro)",
    "family": "KLING",
    "audioApplies": true,
    "maxDur": 15,
    "eloT2V": 1247,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 100,
            "audioOn": 100,
            "status": "verified",
            "source": "support.freepik.com",
            "note": "audio sin coste extra"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 100,
            "audioOn": 100,
            "status": "verified"
          },
          "v2v": {
            "type": "cr_per_sec",
            "value": 150,
            "status": "verified",
            "note": "with video reference"
          }
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.112,
            "audioOn": 0.168,
            "status": "verified",
            "source": "fal.ai/learn/tools/seedance-2-0-vs-kling-3-0"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.112,
            "audioOn": 0.168,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.112,
            "audioOn": 0.168,
            "status": "verified"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.112,
            "audioOn": 0.168,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 23.63,
            "status": "verified",
            "source": "docs.comfy.org"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 23.63,
            "status": "verified"
          },
          "v2v": {
            "type": "cr_per_sec",
            "value": 35.45,
            "status": "verified",
            "note": "with video ref"
          }
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 23.63,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 23.63,
            "status": "verified"
          },
          "v2v": {
            "type": "cr_per_sec",
            "value": 35.45,
            "status": "verified"
          }
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 7,
            "audioOn": 7,
            "status": "verified",
            "source": "higgsfield + 3 fuentes coincidentes abr 2026"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 7,
            "audioOn": 7,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 7,
            "audioOn": 7,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 7,
            "audioOn": 7,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 100,
            "status": "verified",
            "source": "weave.figma.com · derivado tabla oficial · \"Kling 3\""
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 100,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 100,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 100,
            "status": "verified"
          },
          "v2v": null
        }
      }
    }
  },
  "kling-3-0-std": {
    "label": "KLING 3.0 STD",
    "alias": "Kling 3.0 Std (antes O1 Std)",
    "family": "KLING",
    "audioApplies": true,
    "maxDur": 15,
    "eloT2V": 1247,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 75,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 75,
            "status": "verified"
          },
          "v2v": {
            "type": "cr_per_sec",
            "value": 110,
            "status": "verified",
            "note": "with video ref"
          }
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.084,
            "audioOn": 0.112,
            "status": "verified",
            "source": "fal.ai/models/fal-ai/kling-video/o3/standard"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.084,
            "audioOn": 0.112,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 17.72,
            "status": "verified",
            "source": "docs.comfy.org"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 17.72,
            "status": "verified"
          },
          "v2v": {
            "type": "cr_per_sec",
            "value": 26.59,
            "status": "verified",
            "note": "with video ref"
          }
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "kling-2-6-pro": {
    "label": "KLING 2.6 PRO",
    "alias": "Kling 2.6 Pro",
    "family": "KLING",
    "audioApplies": true,
    "maxDur": 10,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 45,
            "audioOn": 80,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 45,
            "audioOn": 80,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.07,
            "audioOn": 0.14,
            "status": "verified",
            "source": "fal.ai/models/fal-ai/kling-video/v2.6/pro"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.07,
            "audioOn": 0.14,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 14.77,
            "audioOn": 29.54,
            "status": "verified",
            "source": "docs.comfy.org"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 14.77,
            "audioOn": 29.54,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "kling-2-5": {
    "label": "KLING 2.5",
    "alias": "Kling 2.5 Turbo",
    "family": "KLING",
    "audioApplies": false,
    "maxDur": 10,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "unlimited",
            "status": "verified",
            "source": "support.freepik.com",
            "note": "unlimited Premium+/Pro/Business"
          },
          "i2v": {
            "type": "unlimited",
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 65,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 65,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "kling_2_5_fal",
            "status": "verified",
            "source": "fal.ai docs · $0.35 base 5s + $0.07/extra sec"
          },
          "i2v": {
            "type": "kling_2_5_fal",
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "kling_2_5_fal",
            "status": "verified"
          },
          "i2v": {
            "type": "kling_2_5_fal",
            "status": "verified"
          },
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 73.85,
            "status": "verified",
            "source": "docs.comfy.org · 73.85cr/run 5s"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 73.85,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 73.85,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 73.85,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "kling-2-1-master": {
    "label": "KLING 2.1 MASTER",
    "alias": "Kling 2.1 Master",
    "family": "KLING",
    "audioApplies": false,
    "maxDur": 10,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 280,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 280,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 1.4000000000000001,
            "status": "verified",
            "source": "fal.ai docs · $1.40 base 5s + $0.28/extra sec",
            "note": "$1.40 base + $0.28/extra"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 1.4000000000000001,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_run",
            "value": 295.4,
            "durRef": 5,
            "status": "verified",
            "source": "docs.comfy.org · 295.4cr/run"
          },
          "i2v": {
            "type": "cr_per_run",
            "value": 295.4,
            "durRef": 5,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "happyhorse-1": {
    "label": "HAPPYHORSE 1.0",
    "alias": "Happy Horse 1.0",
    "family": "HAPPYHORSE",
    "audioApplies": true,
    "audioIncluded": true,
    "maxDur": 15,
    "eloT2V": 1367,
    "eloI2V": 1401,
    "isNew": true,
    "note": "#1 Artificial Analysis ELO",
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 330,
            "status": "approx",
            "source": "reportado por user · no en docs oficiales todavía",
            "note": "estim 60% de 1080p"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 330,
            "status": "approx"
          },
          "v2v": {
            "type": "cr_per_sec",
            "value": 660,
            "status": "approx"
          }
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 550,
            "status": "approx",
            "source": "reportado por user · pendiente verificar en docs"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 550,
            "status": "approx"
          },
          "v2v": {
            "type": "cr_per_sec",
            "value": 1100,
            "status": "approx"
          }
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.14,
            "status": "verified",
            "source": "fal.ai/happyhorse-1.0"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.14,
            "status": "verified"
          },
          "v2v": {
            "type": "usd_per_sec",
            "value": 0.28,
            "status": "verified",
            "source": "fal.ai/models/alibaba/happy-horse/video-edit"
          }
        },
        "1080p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.28,
            "status": "verified",
            "source": "fal.ai/happyhorse-1.0"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.28,
            "status": "verified"
          },
          "v2v": {
            "type": "usd_per_sec",
            "value": 0.56,
            "status": "verified"
          }
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 29.54,
            "status": "verified",
            "source": "docs.comfy.org · 29.54 cr/sec 720p"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 29.54,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 50.64,
            "status": "verified",
            "source": "docs.comfy.org · 50.64 cr/sec 1080p"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 50.64,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "veo-3-1-lite": {
    "label": "VEO 3.1 LITE",
    "alias": "Google Veo 3.1 Lite",
    "family": "VEO",
    "audioApplies": true,
    "maxDur": 8,
    "cappedAt": 8,
    "isNew": true,
    "note": "Variante económica · solo en fal.ai (jun 2026)",
    "pricing": {
      "freepik": {
        "720p": { "t2v": null, "i2v": null, "v2v": null },
        "1080p": { "t2v": null, "i2v": null, "v2v": null }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.03,
            "audioOn": 0.05,
            "status": "verified",
            "source": "fal.ai/models/fal-ai/veo3.1/lite · 720p"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.03,
            "audioOn": 0.05,
            "status": "verified",
            "source": "fal.ai/models/fal-ai/veo3.1/lite/image-to-video · 720p"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.05,
            "audioOn": 0.08,
            "status": "verified",
            "source": "fal.ai/models/fal-ai/veo3.1/lite · 1080p"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.05,
            "audioOn": 0.08,
            "status": "verified",
            "source": "fal.ai/models/fal-ai/veo3.1/lite/image-to-video · 1080p"
          },
          "v2v": null
        }
      },
      "comfy": {
        "720p": { "t2v": null, "i2v": null, "v2v": null },
        "1080p": { "t2v": null, "i2v": null, "v2v": null }
      },
      "higgsfield": {
        "720p": { "t2v": null, "i2v": null, "v2v": null },
        "1080p": { "t2v": null, "i2v": null, "v2v": null }
      },
      "weavy": {
        "720p": { "t2v": null, "i2v": null, "v2v": null },
        "1080p": { "t2v": null, "i2v": null, "v2v": null }
      }
    }
  },
  "veo-3-1": {
    "label": "VEO 3.1 QUALITY",
    "alias": "Google Veo 3.1 Quality",
    "family": "VEO",
    "audioApplies": true,
    "maxDur": 8,
    "cappedAt": 8,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 200,
            "audioOn": 300,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 200,
            "audioOn": 300,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 200,
            "audioOn": 300,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 200,
            "audioOn": 300,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.2,
            "audioOn": 0.4,
            "status": "verified",
            "source": "fal.ai/learn/tools/ai-video-generators"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.2,
            "audioOn": 0.4,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.2,
            "audioOn": 0.4,
            "status": "verified"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.2,
            "audioOn": 0.4,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_run",
            "value": 337.6,
            "audioOn": 675.2,
            "durRef": 8,
            "status": "verified",
            "source": "docs.comfy.org · veo-3.0-generate-001"
          },
          "i2v": {
            "type": "cr_per_run",
            "value": 337.6,
            "audioOn": 675.2,
            "durRef": 8,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_run",
            "value": 337.6,
            "audioOn": 675.2,
            "durRef": 8,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_run",
            "value": 337.6,
            "audioOn": 675.2,
            "durRef": 8,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 55,
            "audioOn": 55,
            "status": "verified",
            "source": "higgsfield + 3 fuentes · rango 40-70 cr/clip, valor central"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 55,
            "audioOn": 55,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 55,
            "audioOn": 55,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 55,
            "audioOn": 55,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 88,
            "audioOn": 88,
            "status": "verified",
            "source": "weave.figma.com · derivado tabla oficial"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 88,
            "audioOn": 88,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 88,
            "audioOn": 88,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 88,
            "audioOn": 88,
            "status": "verified"
          },
          "v2v": null
        }
      }
    }
  },
  "veo-3-1-fast": {
    "label": "VEO 3.1 FAST",
    "alias": "Google Veo 3.1 Fast",
    "family": "VEO",
    "audioApplies": true,
    "maxDur": 8,
    "cappedAt": 8,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 100,
            "audioOn": 120,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 100,
            "audioOn": 120,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 100,
            "audioOn": 120,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 100,
            "audioOn": 120,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.1,
            "audioOn": 0.15,
            "status": "verified",
            "source": "fal.ai docs"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.1,
            "audioOn": 0.15,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.1,
            "audioOn": 0.15,
            "status": "verified"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.1,
            "audioOn": 0.15,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_run",
            "value": 168.8,
            "audioOn": 253.2,
            "durRef": 8,
            "status": "verified",
            "source": "docs.comfy.org · veo-3.0-fast-generate-001"
          },
          "i2v": {
            "type": "cr_per_run",
            "value": 168.8,
            "audioOn": 253.2,
            "durRef": 8,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_run",
            "value": 168.8,
            "audioOn": 253.2,
            "durRef": 8,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_run",
            "value": 168.8,
            "audioOn": 253.2,
            "durRef": 8,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 14,
            "status": "verified",
            "source": "higgsfield · 22cr/8s extrapolado a 5s"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 14,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 14,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 14,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "hailuo-2-3": {
    "label": "HAILUO 2.3",
    "alias": "MiniMax Hailuo 2.3",
    "family": "HAILUO",
    "audioApplies": false,
    "maxDur": 6,
    "note": "768p doc; 1080p max 6s · 768p hasta 10s",
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 60,
            "status": "verified",
            "source": "support.freepik.com",
            "note": "768p en docs"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 60,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 100,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 100,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_clip_6s",
            "value": 0.28,
            "status": "verified",
            "source": "fal.ai docs · 768p Standard $0.28/6s clip"
          },
          "i2v": {
            "type": "usd_per_clip_6s",
            "value": 0.28,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "usd_per_clip_6s",
            "value": 0.49,
            "status": "verified",
            "source": "fal.ai docs · 1080p Pro $0.49/clip"
          },
          "i2v": {
            "type": "usd_per_clip_6s",
            "value": 0.49,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_6s",
            "value": 59.08,
            "status": "verified",
            "source": "docs.comfy.org · hailuo-02 768P 6s"
          },
          "i2v": {
            "type": "cr_per_clip_6s",
            "value": 59.08,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_6s",
            "value": 103.39,
            "status": "verified",
            "source": "docs.comfy.org · hailuo-02 1080P 6s"
          },
          "i2v": {
            "type": "cr_per_clip_6s",
            "value": 103.39,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "hailuo-2-3-fast": {
    "label": "HAILUO 2.3 FAST",
    "alias": "MiniMax Hailuo 2.3 Fast",
    "family": "HAILUO",
    "audioApplies": false,
    "maxDur": 10,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "unlimited",
            "status": "verified",
            "source": "support.freepik.com",
            "note": "768p UNLIMITED Pro"
          },
          "i2v": {
            "type": "unlimited",
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 43,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 43,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "wan-2-7": {
    "label": "WAN 2.7",
    "alias": "Wan 2.7",
    "family": "WAN",
    "audioApplies": false,
    "maxDur": 12,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 200,
            "status": "verified",
            "source": "magnific.com/pricing · estim 720p"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 200,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 300,
            "status": "verified",
            "source": "magnific.com/pricing · 600 cr/2s"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 300,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 21.1,
            "status": "verified",
            "source": "docs.comfy.org · wan2.7-t2v 720P"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 21.1,
            "status": "verified"
          },
          "v2v": {
            "type": "cr_per_sec",
            "value": 21.1,
            "status": "verified",
            "note": "wan2.7-videoedit"
          }
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 31.65,
            "status": "verified",
            "source": "docs.comfy.org · wan2.7-t2v 1080P"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 31.65,
            "status": "verified"
          },
          "v2v": {
            "type": "cr_per_sec",
            "value": 31.65,
            "status": "verified"
          }
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "wan-2-6": {
    "label": "WAN 2.6",
    "alias": "Wan 2.6",
    "family": "WAN",
    "audioApplies": false,
    "maxDur": 12,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 200,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 200,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 300,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 300,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 21.1,
            "status": "verified",
            "source": "docs.comfy.org · wan2.6-t2v 720P"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 21.1,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 31.65,
            "status": "verified",
            "source": "docs.comfy.org · wan2.6-t2v 1080P"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 31.65,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "wan-2-5": {
    "label": "WAN 2.5",
    "alias": "Wan 2.5",
    "family": "WAN",
    "audioApplies": false,
    "maxDur": 12,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 200,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 200,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 300,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 300,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.05,
            "status": "verified",
            "source": "fal.ai docs · 480p tier"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.05,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 21.1,
            "status": "verified",
            "source": "docs.comfy.org · wan2.5-t2v 720P"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 21.1,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 31.65,
            "status": "verified",
            "source": "docs.comfy.org · wan2.5-t2v 1080P"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 31.65,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 55,
            "status": "verified",
            "source": "weave.figma.com · derivado tabla oficial"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 55,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 55,
            "status": "verified"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 55,
            "status": "verified"
          },
          "v2v": null
        }
      }
    }
  },
  "pixverse-5": {
    "label": "PIXVERSE 5",
    "alias": "PixVerse 5",
    "family": "PIXVERSE",
    "audioApplies": false,
    "maxDur": 8,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 80,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 80,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 150,
            "status": "verified",
            "source": "support.freepik.com"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 150,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 126.6,
            "status": "verified",
            "source": "docs.comfy.org · pixverse v3.5 normal"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 126.6,
            "status": "verified"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 253.2,
            "status": "verified",
            "source": "docs.comfy.org"
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 253.2,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "pixverse-5-5": {
    "label": "PIXVERSE 5.5",
    "alias": "PixVerse 5.5",
    "family": "PIXVERSE",
    "audioApplies": false,
    "maxDur": 8,
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 1000,
            "status": "verified",
            "source": "support.freepik.com",
            "note": "precio MUY alto"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 1000,
            "status": "verified"
          },
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "grok-imagine-video": {
    "label": "GROK VIDEO",
    "alias": "Grok Imagine Video 1.5 (xAI)",
    "family": "GROK",
    "audioApplies": true,
    "audioIncluded": true,
    "maxDur": 15,
    "isNew": true,
    "note": "Modelo de vídeo (T2V + I2V) · 480p / 720p · máx 15s · sin 1080p",
    "pricing": {
      "freepik": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 80,
            "status": "verified",
            "source": "magnific.com/ai/docs/ai-video-generator-credits · Grok 480-720p = 80 cr/s"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 80,
            "status": "verified",
            "source": "magnific.com/ai/docs/ai-video-generator-credits"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "fal": {
        "720p": {
          "t2v": {
            "type": "usd_per_sec",
            "value": 0.14,
            "status": "verified",
            "source": "fal.ai/models/xai/grok-imagine-video/v1.5 · 720p"
          },
          "i2v": {
            "type": "usd_per_sec",
            "value": 0.14,
            "status": "verified",
            "source": "fal.ai/models/xai/grok-imagine-video/v1.5/image-to-video · 720p"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "comfy": {
        "720p": {
          "t2v": {
            "type": "cr_per_sec",
            "value": 38.19,
            "status": "approx",
            "note": "rate t2v asumido igual que i2v (Comfy no publica precio de vídeo Grok por separado)",
            "source": "docs.comfy.org · grok-imagine 720p (i2v)"
          },
          "i2v": {
            "type": "cr_per_sec",
            "value": 38.19,
            "status": "verified",
            "source": "docs.comfy.org · grok-imagine 720p"
          },
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "higgsfield": {
        "720p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      },
      "weavy": {
        "720p": {
          "t2v": {
            "type": "cr_per_clip_5s",
            "value": 36,
            "status": "approx",
            "note": "Weavy lista Grok como T2V (prompt-only) · valor derivado de la tabla oficial",
            "source": "weave.figma.com · derivado tabla oficial · \"Grok Imagine\""
          },
          "i2v": {
            "type": "cr_per_clip_5s",
            "value": 36,
            "status": "verified",
            "source": "weave.figma.com · derivado tabla oficial · \"Grok Imagine\""
          },
          "v2v": null
        },
        "1080p": {
          "t2v": null,
          "i2v": null,
          "v2v": null
        }
      }
    }
  },
  "omni-flash": {
    "label": "OMNI FLASH",
    "alias": "Google Gemini Omni Flash",
    "family": "OMNI",
    "audioApplies": true,
    "audioIncluded": true,
    "maxDur": 10,
    "isNew": true,
    "note": "Google · lanzado 19 may 2026 · T2V + I2V · audio nativo · máx 10s. API externa aún no pública (jun 2026) → precios de plataforma PENDIENTES.",
    "pricing": {
      "freepik": {
        "720p": { "t2v": null, "i2v": null, "v2v": null },
        "1080p": { "t2v": null, "i2v": null, "v2v": null }
      },
      "fal": {
        "720p": { "t2v": null, "i2v": null, "v2v": null },
        "1080p": { "t2v": null, "i2v": null, "v2v": null }
      },
      "comfy": {
        "720p": { "t2v": null, "i2v": null, "v2v": null },
        "1080p": { "t2v": null, "i2v": null, "v2v": null }
      },
      "higgsfield": {
        "720p": { "t2v": null, "i2v": null, "v2v": null },
        "1080p": { "t2v": null, "i2v": null, "v2v": null }
      },
      "weavy": {
        "720p": { "t2v": null, "i2v": null, "v2v": null },
        "1080p": { "t2v": null, "i2v": null, "v2v": null }
      }
    }
  }
};

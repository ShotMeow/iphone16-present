import type { GLTFParser } from "three-stdlib";
import type {
  AnimationClip,
  Camera,
  Group,
  Mesh,
  MeshStandardMaterial,
} from "three";

export interface GLTF {
  animations: AnimationClip[];
  scene: Group;
  scenes: Group[];
  cameras: Camera[];
  asset: {
    copyright?: string;
    generator?: string;
    version?: string;
    minVersion?: string;
    extensions?: any;
    extras?: any;
  };
  parser: GLTFParser;
  userData: any;
}

export type IPhoneGLTFType = GLTF & {
  nodes: {
    ttmRoLdJipiIOmf: Mesh;
    DjsDkGiopeiEJZK: Mesh;
    buRWvyqhBBgcJFo: Mesh;
    MrMmlCAsAxJpYqQ_0: Mesh;
    wqbHSzWaUxBCwxY_0: Mesh;
    QvGDcbDApaGssma: Mesh;
    vFwJFNASGvEHWhs: Mesh;
    evAxFwhaQUwXuua: Mesh;
    USxQiqZgxHbRvqB: Mesh;
    TvgBVmqNmSrFVfW: Mesh;
    GuYJryuYunhpphO: Mesh;
    pvdHknDTGDzVpwc: Mesh;
    CfghdUoyzvwzIum: Mesh;
    DjdhycfQYjKMDyn: Mesh;
    usFLmqcyrnltBUr: Mesh;
    xXDHkMplTIDAXLN: Mesh;
    vELORlCJixqPHsZ: Mesh;
    EbQGKrWAqhBHiMv: Mesh;
    EddVrWkqZTlvmci: Mesh;
    KSWlaxBcnPDpFCs: Mesh;
    TakBsdEjEytCAMK: Mesh;
    IykfmVvLplTsTEW: Mesh;
    wLfSXtbwRlBrwof: Mesh;
    WJwwVjsahIXbJpU: Mesh;
    YfrJNXgMvGOAfzz: Mesh;
    DCLCbjzqejuvsqH: Mesh;
    CdalkzDVnwgdEhS: Mesh;
    NtjcIgolNGgYlCg: Mesh;
    pXBNoLiaMwsDHRF: Mesh;
    IkoiNqATMVoZFKD: Mesh;
    rqgRAGHOwnuBypi: Mesh;
  };
  materials: {
    hUlRcbieVuIiOXG: MeshStandardMaterial;
    PaletteMaterial001: MeshStandardMaterial;
    PaletteMaterial002: MeshStandardMaterial;
    dxCVrUCvYhjVxqy: MeshStandardMaterial;
    MHFGNLrDQbTNima: MeshStandardMaterial;
    kUhjpatHUvkBwfM: MeshStandardMaterial;
    RJoymvEsaIItifI: MeshStandardMaterial;
    KSIxMqttXxxmOYl: MeshStandardMaterial;
    mcPrzcBUcdqUybC: MeshStandardMaterial;
    pIhYLPqiSQOZTjn: MeshStandardMaterial;
    eShKpuMNVJTRrgg: MeshStandardMaterial;
    xdyiJLYTYRfJffH: MeshStandardMaterial;
    jpGaQNgTtEGkTfo: MeshStandardMaterial;
    ujsvqBWRMnqdwPx: MeshStandardMaterial;
    sxNzrmuTqVeaXdg: MeshStandardMaterial;
    pIJKfZsazmcpEiU: MeshStandardMaterial;
    zFdeDaGNRwzccye: MeshStandardMaterial;
    TBLSREBUyLMVtJa: MeshStandardMaterial;
    xNrofRCqOXXHVZt: MeshStandardMaterial;
    yQQySPTfbEJufve: MeshStandardMaterial;
    PaletteMaterial003: MeshStandardMaterial;
    PaletteMaterial004: MeshStandardMaterial;
    oZRkkORNzkufnGD: MeshStandardMaterial;
    yhcAXNGcJWCqtIS: MeshStandardMaterial;
    bCgzXjHOanGdTFV: MeshStandardMaterial;
    vhaEJjZoqGtyLdo: MeshStandardMaterial;
    jlzuBkUzuJqgiAK: MeshStandardMaterial;
    PpwUTnTFZJXxCoE: MeshStandardMaterial;
    yiDkEwDSyEhavuP: MeshStandardMaterial;
    hiVunnLeAHkwGEo: MeshStandardMaterial;
    HGhEhpqSBZRnjHC: MeshStandardMaterial;
  };
};

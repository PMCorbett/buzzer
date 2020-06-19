// @flow

export type AssetType = {
  id: number,
  fileName: string,
  fileType: string,
  fileSize: number,
  assetState: string,
  styles: ?{
    original: string,
    jpg?: string,
    thumbnail?: string,
    mp4?: string,
    mp3?: string,
    posterMedium?: string,
    posterSmall?: string,
    posterTiny?: string,
  },
};

export type AssetShortType = 'image' | 'audio' | 'video';

export type AssetSigningType = {
  loading: boolean,
  src: ?string,
  cached: boolean,
  error: ?Error,
};

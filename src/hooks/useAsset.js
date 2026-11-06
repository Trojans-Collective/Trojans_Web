import { useMemo } from 'react';
import { getAssetById } from '../assets/assetManifest';

/**
 * Hook to retrieve an asset configuration and resolved path by ID
 */
export function useAsset(assetId) {
  const asset = useMemo(() => {
    return getAssetById(assetId);
  }, [assetId]);

  return asset;
}

export default useAsset;

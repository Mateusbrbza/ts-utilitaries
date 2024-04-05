export const extensionValidate = (fileType: string, allowedTypes: string) => {
  const typesArr = allowedTypes
    .split(',')
    .map(element => element.toLowerCase().trim());
  const type = fileType.replace(/(.*)\//g, '');

  return typesArr.includes(type);
};

export const sizeValidate = (
  fileSize: number,
  allowedMinSize: number,
  allowedMaxSize: number,
) => {
  if (fileSize < allowedMinSize) {
    return false;
  }

  if (fileSize > allowedMaxSize) {
    return false;
  }

  return true;
};

export const minDimensionValidate = async (
  file: Blob,
  allowedDimension: any,
  setErrorMessageOnload: (message: string) => void,
) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onerror = reject;

    img.onload = () => {
      if (
        img.width < allowedDimension.width.minRequirement ||
        img.height < allowedDimension.height.minRequirement
      ) {
        setErrorMessageOnload(
          `A imagem enviada é menor que o esperado. Deve ter tamanho mínimo de ${allowedDimension.width.minRequirement}x${allowedDimension.height.minRequirement} pixels.`,
        );
        resolve(false);
      }
      resolve(true);
    };
  });

export const maxDimensionValidate = async (file: Blob, allowedDimension: any) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onerror = reject;

    img.onload = () => {
      if (
        img.width > allowedDimension.width.maxRequirement ||
        img.height > allowedDimension.height.maxRequirement
      ) {
        resolve(false);
      }
      resolve(true);
    };
  });

export const exactDimensionValidate = async (
  file: Blob,
  allowedDimension: any,
) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onerror = reject;

    img.onload = () => {
      if (
        img.width !== allowedDimension.width.requirement ||
        img.height !== allowedDimension.height.requirement
      ) {
        resolve(false);
      }
      resolve(true);
    };
  });

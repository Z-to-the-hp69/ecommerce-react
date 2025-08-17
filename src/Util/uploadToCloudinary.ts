export const uploadToCloudinary = async (file: any) => {
  const cloud_name = "dyxdfzoho";
  const upload_preset = "ml_default";

  if (file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dyxdfzoho/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const fileData = await res.json();
    return fileData.url;
  } else {
    console.log("errors: pics not found");
  }
};

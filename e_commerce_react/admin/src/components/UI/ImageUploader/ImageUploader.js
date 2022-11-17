import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import ProductImgCard from "../../Products/Create/ProductImgCard";
import ImageContaine from "./ImageContaine";

const ImageUploader = ({ images, setImages }) => {
  const [isError, setisError] = useState(false);

  const maxNumber = 1;
  const maxFileSize = 6000000;
  let errorDescription;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit

    // console.log(imageList[0].file, addUpdateIndex);

    setImages(imageList);
  };
  const errorHandler = (error, files) => {
    if (error.acceptType) {
      errorDescription = "Acceptable formats jpg,jpeg,png";
      setisError(true);
    }
    if (error.maxFileSize) {
      errorDescription = "Please upload the image less than 6 mb";
      setisError(true);
    }
    if (error.maxNumber) {
      errorDescription = `Only ${maxNumber} files allowed`;
      setisError(true);
    }
  };

  return (
    <div className="App">
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        isDragging
        onError={errorHandler}
        acceptType={["jpg", "jpeg", "png"]}
        maxFileSize={maxFileSize}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <>
            <ImageContaine
              onClick={onImageUpload}
              dragProps={dragProps}
              imgCount={maxNumber}
            />

            {isError && <p className="my-1 text-danger">{errorDescription}</p>}

            <button className="btn btn-danger my-1" onClick={onImageRemoveAll}>
              Remove All images
            </button>

            {imageList.map((image, index) => (
              <div key={index}>
                {/* <img src={image["data_url"]} alt="" width="100" /> */}
                <ProductImgCard
                  src={image["data_url"]}
                  index={index}
                  removeHandler={onImageRemove}
                  updateHandler={onImageUpdate}
                />
              </div>
            ))}
          </>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUploader;

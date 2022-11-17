import axios from "../../axiosInstance";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Collection = () => {
  const [Title, setTitle] = useState("");
  const [descript, setDescript] = useState("");

  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();

    if (Title.trim().length < 5) {
      setErrorTitle(true);
      return;
    }

    if (descript.trim().length < 10) {
      setErrorDescription(true);
      setErrorTitle(false);
      console.log(errorDescription);
      return;
    }

    setErrorDescription(false);

    if (!errorTitle || !errorDescription) {
      console.log("Form valid");
      const payload = {
        name: Title,
        description: descript,
      };
      axios
        .post("/category", payload)
        .then((response) => {
          console.log(response.data);
          if (response.data.isSuccess && !response.data.isError) {
            swal("category created Successfully !", {
              icon: "success",
            }).then((value) => {
              navigate("/collection/view");
            });
          }
        })
        .catch((error) => {
          console.log(error.errorMessage);
        });
      setDescript("");
      setTitle("");
    }
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescript(e.target.value);
  };

  useEffect(() => {}, []);

  const navigate = useNavigate();

  const navigateCollectionView = () => {
    navigate("/collection/view");
  };
  return (
    <div className="collections-create">
      <div className="collections-create__titlebar dflex justify-content-between align-items-center">
        <div className="collections-create__titlebar--item">
          <div className="breadcramb mt-3" onClick={navigateCollectionView}>
            <i className="fas fa-angle-left mr-1"></i>Collections
          </div>
          <h1 className="my-1">Create Collections</h1>
        </div>
      </div>
      <form
        className="collections-create__cardWrapper mt-2"
        onSubmit={formHandler}
      >
        <div className="collections-create__main">
          <div className="collections-create__main--addInfo card py-2 px-2 bg-white">
            <p className="mb-1">Title</p>
            <input
              type="text"
              placeholder="e.g. Summer Collection, Under $100, Best picks"
              className="input"
              value={Title}
              onChange={titleChangeHandler}
            />
            {errorTitle && (
              <p className="text-danger">Title must contain min.5 characters</p>
            )}

            <p className="my-1">Description</p>
            <textarea
              cols="30"
              rows="10"
              className="textarea"
              value={descript}
              onChange={descriptionChangeHandler}
            ></textarea>
            {errorDescription && (
              <p className="text-danger">
                Description must contain min.10 characters
              </p>
            )}
          </div>
        </div>
        <div className="collections-create__sidebar">
          {/* ----------------------------------------------------
          To add image here un comment this area
          ----------------------------------------------------
          <div className="card py-2 px-2 bg-white">
            <h3>Category Image</h3>
            <div className="collections-create__sidebar--form mt-2">
              <label className="collections-create__sidebar--form--label">
                Add Image
              </label>
              <input
                className="collections-create__sidebar--form--input"
                type="file"
                id="myfile"
                name="myfile"
              />
            </div>
          </div>
          ------------------------------------------------------------------------- */}
        </div>
        <div className="collections-create__titlebar--item">
          <button className="btn btn-light" onClick={navigateCollectionView}>
            Discard
          </button>
          <button className="btn btn-secondary ml-1" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Collection;

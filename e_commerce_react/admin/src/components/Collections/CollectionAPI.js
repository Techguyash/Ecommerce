import swal from "sweetalert";
import axios from "../../components/axiosInstance";

export const deleteAPI = (id, fetchCollectionData) => {
  swal({
    title: "Are you sure?",
    text: "You want to update the given values for this Category?",
    icon: "warning",
    buttons: true,
    dangerMode: false,
  }).then((updateData) => {
    if (updateData) {
      axiosDelete(id, fetchCollectionData);
    }
  });
};

const axiosDelete = (id, fetchCollectionData) => {
  axios
    .delete(`/category/${id}`)
    .then((res) => {
      swal("Success", "Category removed", "success").then(() => {
        fetchCollectionData();
      });
    })
    .catch((err) => {
      console.log(err);
      swal(
        "Failed",
        "Please delete the products associated with this category",
        "error"
      );
    });
};

export function fetchCollectionAPI() {
  console.log("function called");
  axios
    .get("/category")
    .then((res) => {
      const response = res.data.data;
      console.log(response);

      return response;
    })
    .catch((err) => {
      console.log(err);
      console.log("api received data failed");
    });
}

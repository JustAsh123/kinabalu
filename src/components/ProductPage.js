import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const rowNumber = String(parseInt(id)+1);
  const sheetName = "product";
  const sheetId = "1RPWues5yhLXPOgG6XDtCa6m6e0MtdZCN3JFRswzGB1w";
  const apiKey = "AIzaSyBM4krJXZGkNfXXGRSOahgAsWpX66jKSmE";

  let Name,PosterLink,Price

  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!A${rowNumber}:C${rowNumber}?key=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.values[0]); // log first row of data
    console.log(data.values[0][0]); // log first column of first row
    Name = data.values[0][0]
    console.log(data.values[0][1]); // log second column of first row
    console.log(data.values[0][2]); // log third column of first row
  })
  .catch((error) => {
    console.log(error);
  });
}

export default ProductPage;
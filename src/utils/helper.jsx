
export function filterData(searchText, restaurants) {
    const filterData =  restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
  }


  //Ye nahi karna hai
// function filterData(searchText, restaurants) {
//   return restaurants.filter((restaurant) =>{
//     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
// });
// }
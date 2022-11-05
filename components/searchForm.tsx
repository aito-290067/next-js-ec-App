
export const SearchForm = () => {
  return (
      <form action="">
        <input type="text" id="search" placeholder="全ての商品から探す"  className="relative shadow border rounded-lg w-96 max-w-lg py-2 px-10 text-gray-700 focus:outline-none focus:ring-4"/>
        <label htmlFor="search">
          <span className="material-icons absolute mt-2.5  mx-6">
            search
          </span>
        </label>
        <button>
        </button>
      </form>
  );
}

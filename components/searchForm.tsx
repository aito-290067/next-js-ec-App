
export const SearchForm = () => {
  return (
      <form action="">
          <span className="material-icons absolute translate-x-3  translate-y-2.5 text-gray-400 z-10">
            search
          </span>
        <input type="text" id="search" placeholder="全ての商品から探す"  className="relative shadow border rounded-lg w-96 max-w-lg py-2 px-12 text-gray-700 focus:outline-none focus:ring-2 z-1"/>
        <label htmlFor="search">
        </label>
        <button>
        </button>
      </form>
  );
}

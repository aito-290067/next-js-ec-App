import style from "../src/styles/favorite.module.css"

export const Favorite = () => {

  return (
    <label className={style.like}>
      <input type="checkbox" />
      <span className={` material-icons ${style.glitter} `}>
        flare
      </span>
      <span className={` material-icons ${style.favorite} `}>
        favorite
      </span>

    </label>


  )

}

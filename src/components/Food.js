import FooData from "../asset/FoodData"

export default  function Food({item}){
   return (
  <>
    <a
      key={item.id}
      href={item.action.link}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 text-center "
    >
      <div className="h-40 w-40">
        <img
          className=""
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
          alt={item.action.text}
        />
      </div>

     
    </a>
  </>
);
}
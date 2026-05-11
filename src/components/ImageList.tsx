import type { ListItem } from "../types";

function ImageList({ list }: {list: Array<ListItem>}) {
  const redirect = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="flex flex-wrap justify-center max-w-282.5 ml-auto mr-auto mt-5">
      {list.map((item) => (
        <div
            key={item.name}
            onClick={() => redirect(item.link)}
            className="bg-dark-grey m-2.5 cursor-pointer rounded-lg ease-out border-2 border-light-grey shadow-[0_0_7px_0px_#57B7C7,0_0_100px_0px_#06182B] sm:[&:hover]:border-white sm:[&:hover]:bg-dark-blue sm:[&:hover]:shadow-[0_0_3px_1px_white,0_0_10px_5px_#57B7C7,0_0_100px_0px_#06182B]">
          <img src={item.img} alt={item.name} loading="lazy" className="overflow-hidden object-cover block rounded-t-[5px] sm:w-50 sm:h-70 w-42.5 h-62.5" />
          <div className="p-1 overflow-hidden border-t-2 border-t-light-grey sm:[&:hover_&]:border-t-[2.5px] sm:[&:hover_&]:border-t-white">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageList;

import { Views, Facebook, Map, Google } from "../../icons/dashboardIcons";
import mention from "../../../public/dashboard1.png";
import message from "../../../public/dashboard2.png";
import webvisit from "../../../public/dashboard3.png";
import dialer from "../../../public/dialer.png";
import mobile from "../../../public/mobile.png";
import Image from "next/image";

const TableBody = ({
  tableData,
  columns,
  hasBackgroundColor,
  hasBoxShadow,
}: any) => {
  return (
    <div className="text-black p-2">
      <ul className=" px-2 ">
        {tableData?.map((data: any, index: number) => {
          return (
            <li
              className={`flex  justify-between items-center my-2 ${
                hasBackgroundColor &&
                (index % 2 == 0 ? "bg-[#DBE3ED]" : "bg-[#D0E5CF]")
              } rounded-md p-2  ${
                hasBoxShadow &&
                (index % 2 == 0
                  ? " border-red  shadow-red shadow"
                  : "border-secondary shadow-secondary shadow")
              }     `}
              key={data.id}
            >
              {columns?.map(({ accessor }: any) => {
                const tData = data[accessor] ? data[accessor] : "——";
                console.log(accessor);

                return (
                  <td
                    className="w-1/5 flex flex-wrap items-center "
                    key={accessor}
                  >
                    {tData.constructor === Array ? (
                      tData.map((e, i) => {
                        return (
                          <div key={i} className='grid grid-cols-4 gap-1 items-center'>
                           <div className="flex space-x-1 items-center"> <span>{e.fbCount} </span> <Facebook /> </div> 
                           <div className="flex space-x-1 items-center"> <span>{e.mapCount}</span> <Map /> </div> 
                           <div className="flex space-x-1 items-center"> <span>{e.googleCount}</span> <Google /> </div> 
                           <div className="flex space-x-1 items-center"> <span>{e.mentionCount}</span> <Image alt='sleekride' height={20} width={20}  src={mention.src} /> </div> 
                           <div className="flex space-x-1 items-center"> <span>{e.messageCount}</span> <Image alt='sleekride' height={20} width={20}   src={message.src} /> </div> 
                           <div className="flex space-x-1 items-center"> <span>{e.phoneCount}</span> <Image alt='sleekride' height={20} width={20}   src={dialer.src} /> </div> 
                           <div className="flex space-x-1 items-center"> <span>{e.clickCount}</span> <Image alt='sleekride' height={20} width={20}   src={webvisit.src} /> </div> 
                           <div className="flex space-x-1 items-center"> <span>{e.appCount}</span> <Image alt='sleekride' height={20} width={20}   src={mobile.src} /> </div> 
                          </div>
                        );
                      })
                    ) : accessor == "views" ? (
                      <div className="flex  space-x-2 items-center"> 
                       <span>{tData}</span>  <Views />
                      </div>
                    ) : (
                      tData
                    )}
                  </td>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableBody;

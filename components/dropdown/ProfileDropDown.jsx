import React, { useContext, Fragment } from "react";
import { Button, Popover } from "@mui/material";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { DropDownIcon } from "../icons/navbarIcons";
import { LogoutIcon } from "../icons";
import { AuthContext } from "../../store/AuthProvider/AuthProvider";
import { Logout } from "../../Firebase";
import { AppContext } from "../../store/AppProvider/AppProvider";
const ProfileDropDown = () => {

  const { userData } = useContext(AppContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const profileOpen = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // console.log(userData)
  let avatarSrc = userData?.profileImage ? userData?.profileImage : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgSEhUYGBIYGBgREhESGBgYEhESGBUZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHDQhISE0NDExNDQ0NDQxNDQ0NDQ0NDE0NDQ0NDQ0NDQxNDE0MTQ0NDQ0NDQ0NDQ/PzQ0NDQxMf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA/EAACAQIEAwYDBQYFBAMAAAABAgADEQQSITEFQVEGIjJhcYETkaEHI0LB0RRSYnKx8BUzY5LhQ4LC8SSisv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIREBAQACAgMAAwEBAAAAAAAAAAECESExAxJBMmGBUSL/2gAMAwEAAhEDEQA/ANTSpXEmFGTUE7kMYHhisgZ766gA20mNba2BGlGmnNR/hNLz+cjXg1PmWPvbSPU2zJpxhSak8FpfxfP/AIjV4HTtqzE9bj9I9abZYrEBNNU4BTtoWvy1H6QdwzhWctmJAUlTbckRqmwwJHinNJ/gVP8Aef5j9I0cDp38TW6aX+do9abZ8JHZJof8Fp9W+Y/ScHBU5s3lt+ketNs+UnJojwWn1b5j9ICxWGKOUve2oPUGLNEpmWIrH5ZFicRTprnqOqL+87BR8zIrtpwrM9iu2/D0Nvilz/pozD/da31jaHbrh76fEZf56bj6gGUaEiMKyvguLYatpSrI5/dVhm/27y4VkEREaRJSsYRAhYSK2ssOJDzkWHrL3DaGcnylVFhjgiat7TWPaZdHYyjlEo2hfig0PtBdpqsQy04RHkTloV3DL3oTdYPw/ihIuLayxKG4pJQdIRxdQSiziANqU9TFJahFzFKg5QXuTSYPwJ/KP6QBhh93D2C8C+gmYqxFFFKFFFFAUE8E3qj/AFGhaCeD+OsP4z/UyAtFFFKFFFFAUzXF1++Pos0s86+1DtAcIn3f+fUXJT/gA8Tn0uLeZHnJVgL2v7aJhiaNAK+I/GTcpR/mtu38Nx5zyviXEqtdzUrOztyzHRfJV2Uekq1XJJJJJJJJJuSSbknzkUml2kD/ANiPRvPWQiPRCTYWMqLisNCw22Ybg+R5TYdl+01ZGCVHZ6W3f1dR1BOvsbzKYVMp1Gt/A1+9/LeXUUA5qZsdwDYKWG6nmD/7k0u3stCqrqHQ3U6gzpEzHYbHfEVhta+ZSblScpHtq3rmmqIkqoXErneWXErkazNWJqcN8EGre0DUxDfBN29prHtMuljig0+UF2hXidv6QXaarEMitHkTkKdhh3pLi7xmG8UmxSyxmgWLJ6ytY23hPE0ZW+HKA9Qm51MUt1KOpig21GE/y/nDmB8C+kA4M/d/OG+HeATKrcUUaJQ6KciEDsFcK8dYfx/mYUgjhaWq1ddm/MyAxFFFKFFFFA5PAPtgxLtj3R/ClOmlMb9wrnJPmWZvkJ7/AD5s7WYgYjiWIc7Gs1MX5LTtTH0S/vJVgNw/g1Sr3j3U621PpC69mk5lpp8NTUKABpbSTLTnG516MfHNMynZmmRbvX63lqh2OBPi9Oo95o6VOEaItJ7Vr0xZ2j2MVtGYkecN0exFMg3JJIF22ueV+phfBm51miwira01juueUmPx4RikrYPFMquyOG7rDZ15Zhsw8jPTez3E/wBporUYZXHcqLyDje3kdDA32p8MGenVUakFXt0/WTdjK11K8yisbcyCRf5ETbm0biV2XWWmEgbeZqxIghThSm5tBtMQvwbdvaax7TLpLjkPOUbQrxAaH2gwiarCMiK0cROWgPoLrJ8TyjMKO9JcUNZqJQ7ESsRLlcSvllgpMsUlKzsAtgB9384a4Z4BA/DfAfUwxw3wD3mVW41Y4ziwEZxTHTggImCeEt95VvzN/qYWIgjhotWqf3zkBmKKKUKKKKByfMnGaWTHVkF7ivUXXc/eML+8+mWYDU7dek8M7UYSkeJ1K6VUZXZaiJZ8zHJZyDly6MvXXMLc5nLprHtaw4IUA72k6W6zKVeL1nZ1ppkVDlZnOt/S2koVcbWQ61bHy/5nH1ej3k6ehUxrpLSEgzAYDi2IU3LfEXmLBX9usI0u11MjKA+cnKoC3Yk6AWEet+L7z7w3eGbXe00WEII0N+s8N4lxfEltKrJbTLew97aQrwDiWNQhw5fMbaOCrG17XJtfyvN4zTGV9uG/7c0SaYcjQGx8rwH2NQZmZdAFyW6G4/SFMT2ko16bYKqrpjXpkpRdLZ2yllyMpKm9jrm5GR9kuHVKVItVTIzsSqkgnKNNbed5pzGXErONZaeVnGszSJqcL8G3b2gimIY4ONW9prHtMulzHjQwYRCmPGhg2brnEZE5aPIjTIqXCjvSfEjWQ4XxSxiRNRKHVhIQJYqiRWlFYrOR5EUC/wAMPcPqYX4YwyWgXhp7h9YY4SO57zKr941Wj4xVgOvOKZ0icUQOkwNgXHxn87/1hkiBsIo+Ow9YBq8bm5R1o0rAdeNDR04BAp8WoM9CrTQ2ZkZFP8RUgTxLE4YLVw51vaojX3uRfn6Ge8meVdvsB8KuKi6KWWqOnebK4+pPvOXkn128V4uP9ZmrhAajqRoyI/rYsp+Vl+cqV+EKQBY2F7C55m5h1sMH1JKst8rqbMt9/UbaHTQSliqVRP8ArE9MyIWPyAnOV29f0F4mh8JGqHVtlHMudAPnD+B4DRXDPUCD4lBRiPiqo+IxQhn13OZQwt5+UEphXdg1RmYKQQDYKD1sNzN32YUWemw0ZSLHmLaial5S48Vjq3ZsXzDvI3esDr1EL8J4HTay5CLW7wJBABvbQ666yPiNOvhSlMMppZQtP4gLFVXQDMCNB5gnzhfgdXEMbq9JAeeR3PsM6x91ss43pYHCqZq16xVWehh0w9N21anUYVHci+xyPS18z1hWlRyZ9SQzs63N+6fD9JOvD1WkaeZmzvmqVGtndj3mJsLDRbWAsAABtE/ltsPQbTWt2fpyt1LP9V3lZ95aaVn3isxLShPhrkMbQZShThQ7xmse0yW8U5IlMwhixpKBE25mGNjzGyKkw3ilnECV8N4pZrzUSqNUSPLJqwlGozcpQ/8AZzFK37U8UvBpd4Z4D6w3wo9z3gXhXhPrDPCvCfWYUQjRHRqwHTixRLA7A9D/AD2hgwKh+/P98oBkThMQnGgPnBOFrSMN3v76QJpnu0nDqddSjpmIVsmpBDEabeYGnlDwcShi27wks2sunk1OsDqDMxicVXaq+qqqtlBc6KOvvDnanCthsTURDZSfi097FHN8t9hY3HsJQwyZnbOB3lAa+99be/6ThrVemZe0VmTFNY06qEb3ViL/AE1h7B8RxiLZEU1LZQ+cZV6tY87SLBo1Lu5FemSCAdKgHQHY+hsYdwdSgLf/AB2vlUa5fEDvvv8A1itT+g+MOL+HeuaXkz1Bm+vvOdkMZV+KUa2Uai2o5X32Gohbi/CxUYVqqKqID8Kkmoudczm1yegFveDMCzU7kDVmzjkdwtjcfwjlLYm9PSc9wo6Xb6W/ORtBvAHLp8VibEfDp9Cq7sPU2H/bCLmdJ089vKFpWqbyw5ldzrJViWkYU4X4jBdKFOFnvGXHtMuhDF7GDjCOK2PpBzGbczTOGK8UCTDeKWq0qYfxS5WlhVOsJWKSzWkDnSUiuwiivFCpuFHun1hfhb7jzgfhWxhjhY39ZlBDNI1q62klpCo1MKlLxtOredIjKQ1MCUvAhf74mGmgOoPvfeSgyr6Rr1NY5dpG280iRjeRlzeTLGOReRSXaD8Q/eEJAwZxjFU6StVqMFpopd3OwUQMJ9oHDhUqIb2dUBU8iM7Ag+R/Kee4XiWR3+IdjlYXF82gP/ltN1ieNftmWuEKIykU1bxGmHYBm8zYm3IETJ9puDF/vKY7/wCNf3gOY85xt/6srvJfWWCdHFowGVxqL7+kt4FamYd4a+gtv7zznD4p0axuCNDfcTRf4wmQXPftyP8AdpdaWZbbTiHEadsmcHKOo1PvvrKPAuHHE1FUH7tQGqN0TNcAebfr0mZwK1cS4p0UJYjw3sLcyeQA0nrvZPhIw1EU73c3ao/VuXsBbSXTFytWqdNVAVQAqqFVRsABoBI3/v5SHhnEkrBwO7Upu1KrTO6VEYqfUaGx5ydzNXhziu8pV64DAGXXMDcapkrmXcTNaFKVQSCpxgUWNzvpMVV7SOhyneU8dxEupdjyJEkukyu3qWA4/Trr3SOlucq4zG2cKDPMez3GPhZjffX6Sxg+P1Hqlm6nL6Tftw5x6nTqXkkFcLxGZQYTBmlT4c96XK0pYfxCXK8sKp1pBUktaROZSKrNFO5RFKLHCdjC/DefrBHCPxe0NcLHi9Zki4JEqm5lmNA1kVGymR0FNzeWpwCA3LAtRD8W3nDsFVv89faBfFM2jWpG8sRQIRTMZ8Bs17yzMZ2u+0LB4G9MH42JGnwKbCyH/UfZPTU+UDR8Ux9LDUnxFdgtNBmdvoABzJJAA5kieDdvO3r44fCRDTw4ObKTepUI8Je2gA3sOfPSCu1PbXGY42rPlpXzLh6d1pLbYnm5829rTOEzUR7FgMMP2WgyDRaSX38GQa+2/uY1lvGdisYHwlMblFCHn4dP3T0l3F4QoS6f5ZIuv7hPsNCb+nynPyYfY7ePP5QPGcHpVDd0BPI853Cdk8Oxu2Yjpe39IVKSXCkg6Gcbt21Gj4LgqNFMtNAo3NuZta8J0qwzLTHje9gNwg8begGnqRM3V4itNLsduXWEOxiO/wATGVN3+7pD92mpubep/wDyJvCbrlnxGO4/xF8JxisU1WoEdk/Cc1NQR80J95reH8WpYgE0z3h4kbRlvsfMec8w7cYsvj3qXtchR/KvdEjrYypSZa1Jirp0/Ep8Snr/AMCeu4bx/bzzLVesuZWrgHQzOcI7X03AWtZW0s6+Br8yOUPs4YBlIIOxBuDPNljce3XGy9MJ2pwqh1tveAeKOQmUdJp+1yWYN5zJY+sGWYc8uKo0XtNV2ewWb7wjTl6TKUEzMB1IE9d4bw4JhxprlAm8ZtItcIewtDaPM9w82hqi800IYY94S9XOkHYY94S/iTpNRKo1DrIqhjzI3lEeWKOvFAo4TiqUxdiLHWHeB8QWoTYi24E8arcUZwovpPQ+w+CLfeOTpawGm882Hkyyy18SvQAbxoXWMp0QNQT85KJ3V2NA1johCocQxAuIL3qL6wjjD3feZbtD2mwmByviH7xuyUkGao9ui8hfmbCVPrZCZ3j3bLAYQEVqylx/0qffqX6FV8PvaeM9qvtLxmLulMnD4fbJTY/EYfx1N/ZbDreYhnvGh6F2s+1PFYgNSwoOHonQsGviHHm40Qfy6+c86ZpwzhlHb3iE4BOwNt9nePsz0SejqDbzDbnrb5z0ejVUAlrFCCWGhDL+IaNrpeeM9lK5TFUyPxEofO4uB8wJ65VcMgtqrEDc6gHNpffVRz5ykMbCsRempKHVR+IdR1a3UQea9tobwz2AVWsNCCBsRr+Wv/MD8apkPn0s+py6DOLZtOW4PuZyyx1y74Zb4qlUV6rpTv4mC36AnU+wuZ6HwTGo+GKoAvw/uyoIta11I15j6gzF8FpWY1j4VDW82yn/ANe8M8ExWT46HTMgceqGx2594fLzmvHjxtjy3fDyrtm4/acvMKCfVixtsOVpGK+ZLHfS3mJX7Q1c+KqHcZso28KgAfQSAMbDqNuvz6zvK4VYp1CpIsQN09Of1/rC/D+MVKfeRiBzX8J9oD+ICoty/SLDvYlZRpuKcW/aUysAr/vfhJ/KZvEUHUXYafvDVfmI4sQd5PSxGuhsefmJyy8WN64X2t7SdmMEaldBbQd4/lPZ6lLLTC+U877E4ikuJWm6hWcHKw0BIIsCNtbz06vTzAiY9bjxVlZWi5DHpeFsNW6yD4IDEdDJqwAQmLjxtrfwVwb3IhDGHSBeCvcAwvjjoIxKpEyB3kzmVyJtCijc0Umh5bwTANmT4inLcbz2PgmFyDubEA+hEyH7IGRco87zd8BFksegnm8HO61ljq6FaY0EdOxp3ndDohGlozPAg4gwC6m3Mk8gBPmLtZxc4rFVcRe6s5Wn5Ul7qW6XAv6sZ7d9qfFDQwNQqbPUth0PPv8Ait55A/ynzz/fymojkU4DOwOTjGdnGEBwtynJxJ20onwtXIyuN0ZXA6lSD+U9ySgt1trTcAqdLnMAd+RPPl6GeEJPZuy2I+NgKLbsgNA3F9Ea2vUWAJ6yzpPoit1bKdjzvbc/02HW31h4lhi6FRqw7yGwudeVuuvsNRLeJYeLXUZr2F7nQHX8VtB0G8m4dhfiMWI7qC9rAFmOgVTfoLX9ddYs3w1vXJmDwmVAovlAA0Hi2JbzGp8+kpYun8NXIvojabafhAty2seWl9YbqMLabZmtYWG4N7cj58jrM/x6rak566W1/e6fP+bUy9M728jrHNWc8s5A9jb8p120lbDvcluZueu5vJqhmp0l7RUyc3lqSORkiMbyJTa59AP6mIH++UhV4vcSFX19f6xiPy+kQ3GkqCeCrlatNhoVvr02ns9HioamlQfiAuOjbEfO88Kwr/eL01/KeldnMSWQofwnMPQ6fl9ZMpuLj21GGTNcnmbyr2gfIlhz0hHCLpM32sxPfVPOcsrqN4zkc7PvosNYupcgTO8DewENM99ZMS9muZC5jnMgdptDbxSPNOQBmB4pTFNSWGg1mn4JxJWFwdPKeH8K44inLUPd856R2exVN0BpNcHYA7GcccLi3cpk9Do1nZtDpLwEpcMoZEFzcnUmWKhfla06MOs4vHBJUagx3MsK9hqfeNEeLfbjxbNXpYRT3aa/GqD/AFH0UH0UE/8AfPLQdYV7U8TOJxdfEXuHqMyH/TByp/8ARVgmWBWivEx1nJR0TrCNUzrxBxd/WOjGjr/WAhPTvstxQanXw5/CVrqCLjUBT8io06nynmM132b434eMRSbB1akbeYzDT1X6y4pXo2JBFhbZrbd6+W+9/EeZ6aQxwgEULrzYgad091QDa/hGptvB3FaNr6C3eFrC2+o325nruJd4W16B23drtlt3QDc+Q7p/2ecTtb05VYan+I/hs1tLXYGxGnysJk+1+Jy4dzrs5GpH4Tb05afh0E0eLqd06HcXvlIDWJOcD8XM28rTE9va1qOXrlX8V/ECfI6c+ftGRGAw2kkZr/8APlI6O0R12329zNTpnfJNpb/d8/7EkWQudfoPbSSUvrERHexlgbX+Ur1xrJkbuE9LRFKg/f8AQfnNz2YxeVx0PdPvt9bTAYZ+8TNLwbEWYW339xrLOYfXsmD1W4G08/7Q4nNiSOmk0eA7WUUpsGPeFxY9Z5ti+KZ8Q1TkWuJ58st11k09L4I1wIfvM52XfMmaHi03jOGaa7SvWflJHaVHfWVD7xSHNOwPAQ01PYXipp1fhm9nsV/hYRRTKPYKfaGsqgWW2wPOOxPaKuq5jlt6RRTlcrw7es5O/wAcrkA3Guu0h4/xSumEr1c3hpVGFgNypA+pE5FM+12vrHz0TFFFPQ4uNGkxRQHKY54opQ2dQxRQEZb4biTTqU6gvdXV9DY91gd/adiidpXvmMXOhZRowBGwGgJ152Fzbz8pFwSrageXeY35+AMSdNwCTbY3tFFN/T4pY19rcmHqNNApI99eswHb+toidWB0FgQFO2ugvy9YopnJYySnT++k4mp9O9FFKyjJkqHaKKIV2obzin7t/b+s5FLSIsM1tYW4VWs63iijEq1xFbO3rf5iDakUU8uX516p+MevdkEth1J5iG3eKKdp04VXdpVd4opUV/jRRRQP/9k="

  return (
    <>
      <button onClick={handleClick} className="flex  items-center ">
        <Avatar
          src={avatarSrc
          }
        >{`HH`}</Avatar>
        <DropDownIcon />
      </button>
      <Popover
        open={profileOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ borderRadius: "100%" }}
      >
        <ul className={"  p-4 text-grey "}>
          <li className={` border-grey border-b border-opacity-30`}>
            <button onClick={() => setAnchorEl(null)} className="p-2 ">
              <Link href={"/profile"}>
                <p className=" tracking-wider ">My Profile</p>
              </Link>
            </button>
          </li>

          <li className={` `}>
            <button
              onClick={() => {
                Logout();
                setAnchorEl(null);
              }}
              className="p-2 flex items-center space-x-2"
            >
              <LogoutIcon fill="red" />{" "}
              <p className="font-medium text-red">Logout</p>
            </button>
          </li>
        </ul>
      </Popover>
    </>
  );
};

export default ProfileDropDown;

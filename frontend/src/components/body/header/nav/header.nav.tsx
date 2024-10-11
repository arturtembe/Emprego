import ButtonTemplate from "@/components/templates/button.template.components";
import LiTemplate from "@/components/templates/li.template.components";
import LinkTemplate from "@/components/templates/link.template.components";
import NavTemplate from "@/components/templates/nav.template.components";
import UlTemplate from "@/components/templates/ul.template.components";
import navListHome from "@/helpers/header/nav.header.home";
import { ActiveNavHeaderHomeDTO } from "@/interfaces/dtos/header/active.nav.header.home.interface";
import HomeContextUtil from "@/utils/context/home.context.util";
import { useContext } from "react";

export default function NavHeaderComponent(){
    const context = useContext(HomeContextUtil);

    const closeMenu = ()=>{
        context.setOpenNavMenu(false);
    }
    return ( 
        <NavTemplate 
            className={
                context.openNavMenu ? `nav-header visble-menu`: "nav-header"
            } 
            id="">
            <div className="nav-close-header">
                <ButtonTemplate 
                    className=""
                    id=""
                    name=""
                    click={closeMenu}
                >
                    X
                </ButtonTemplate>
            </div>
            <UlTemplate className="" id="">
                {
                    navListHome.map((el,i)=>(
                        <LiTemplate
                            className={el.li.className}
                            key={i}
                        >
                            <LinkTemplate 
                                href={el.link.href}
                                target={el.link.target}
                                value={el.link.value}
                                className={
                                    context.positionNavHeader === i ? `active ${el.link.className}`: el.link.className
                                }
                            />
                        </LiTemplate>
                    ))
                }
            </UlTemplate>
        </NavTemplate>
    );
}
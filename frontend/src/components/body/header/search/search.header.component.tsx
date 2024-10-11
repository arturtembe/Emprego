import ButtonFormTemplate from "@/components/templates/button.form.template.components";
import FormTemplate from "@/components/templates/form.template.components";
import InputTemplate from "@/components/templates/input.template.components";
import { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import LoadingSearchHeaderComponent from "./loading/loading.search.header";

export default function SearchDesktopHeaderComponent(){
    const refDropContent = useRef<HTMLDivElement>(null);
    const searchChange = (e: ChangeEvent<HTMLInputElement>)=>{
        //console.log(e.target);
        if(e.target.value){
            if(refDropContent.current) {
                if(!refDropContent.current.classList.contains("show")){
                    refDropContent.current.classList.add("show");
                }
            }
        }else{
            if(refDropContent.current) {
                if(refDropContent.current.classList.contains("show")){
                    refDropContent.current.classList.remove("show");
                }
            }
        }
    }
    const submitForm = (e: FormEvent<HTMLFormElement>)=>{
        console.log(e.target);
    }

    useEffect(()=>{
        if(refDropContent){
            window.onclick = function(e){
                if(refDropContent.current){
                    if(!refDropContent.current.contains(e.target as HTMLDivElement)){
                        // console.log(e.target as HTMLDivElement);
                        if(refDropContent.current.classList.contains("show")){
                            refDropContent.current.classList.remove("show");
                        }
                    }
                }
            }
        }
    }, [refDropContent])

    return (
        <FormTemplate
            action=""
            className="search-bar dropdown"
            submit={e=>submitForm(e)}
        >
            <InputTemplate 
                type="search" 
                name="search" 
                pattern=".*\S.*" 
                required={true}
                id="search"
                className=""
                placeholder="Search..."
                change={e=>searchChange(e)}
            />
            <ButtonFormTemplate 
                className="search-btn" 
                type="submit"
                id="search-btn"
                name="search-btn"
            >
                <span>Search</span>
            </ButtonFormTemplate>

            {/* Pre Search data */}
            <div className="dropdown-content" ref={refDropContent}>
                <LoadingSearchHeaderComponent />
            </div>

        </FormTemplate>  
    );
}
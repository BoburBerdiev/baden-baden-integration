'use client'
import {usePathname} from "next/navigation";
import React, { useEffect } from 'react'
import {useTranslation} from "react-i18next";

const BeBookingForm = () => {
    const { i18n  } = useTranslation();

    const bookingForm = (w) => {
        !function(e,n){
            var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
            if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
                !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
                    a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
                    ["uz-ibe.hopenapi.com","ibe.hopenapi.com","ibe.behopenapi.com"])}
        }(w,[
            ['setContext', 'BE-INT-baden-baden_2024-05-29', i18n.language],
            ['embed', 'booking-form', {container: 'be-booking-form'}]
        ]);
    }

    const router = usePathname();

    useEffect(() => {
        bookingForm(window);
    }, [router, i18n.language]);

    return (
        <div id='be-booking-form'/>
    )
}

export default BeBookingForm
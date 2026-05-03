import React, { useState, useEffect } from "react";
import "./amenities.css";
import image132 from "../assest/image/chair.png";

export default function AmenitiesPremium() {
  const amenitiesData = [
    {
      category: "🏨 Property Highlights",
      items: [
        { 
          image: "https://oceanparadisehotelresort.com/wp-content/uploads/2025/11/Beachside.jpg", 
          title: "Beachside Location", 
          desc: "A few steps from the shoreline, offering immediate access to coastal views." 
        },
        { 
          image: "https://oceanparadisehotelresort.com/wp-content/uploads/2025/11/family-vacation-te-220801-996315.webp", 
          title: "Beach Access", 
          desc: "Direct access to pristine sandy beaches for swimming and sunbathing." 
        },
        { 
          image: "https://oceanparadisehotelresort.com/wp-content/uploads/2025/11/Attractiuon.jpg", 
          title: "Convenient Access to Ocean Shores Attractions", 
          desc: "Popular local attractions and entertainment venues are easily accessible." 
        },
        { 
          image: "https://prodimagesbucket.blob.core.windows.net/roomtype-images/34243/12361/97aa8eb5-347e-4481-b0f3-05dce0135567", 
          title: "Sea View Rooms with Balcony", 
          desc: "Private balconies with stunning ocean views for a memorable stay." 
        }
      ]
    },
    {
      category: "🛏 Room Amenities",
      items: [
        { 
          image: "https://www.shutterstock.com/image-photo/woman-holding-air-conditioner-remote-600nw-2583573923.jpg", 
          title: "AC", 
          desc: "Individual air conditioning controls in every room for perfect comfort." 
        },
        { 
          image: "https://media-cdn.tripadvisor.com/media/photo-s/14/90/30/3f/climate-control-in-room.jpg", 
          title: "Climate Control", 
          desc: "Advanced temperature control system for optimal comfort in all weather." 
        },
        { 
          image: "https://s2.resortssupplies.com/wp-content/uploads/2025/09/Hotel-Mini-Bar-Fridge.webp", 
          title: "Fridge", 
          desc: "Compact refrigerator in every room for storing beverages and snacks." 
        },
        { 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNXsJXhgF3-2cxVt6mOU85tfXRUJ_jks3vA&s", 
          title: "Microwave", 
          desc: "In-room microwave for convenient meal preparation and reheating." 
        },
        { 
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop", 
          title: "Coffee Machine", 
          desc: "Fresh coffee setup available in every room for your morning routine." 
        },
        { 
          image: "https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/1619081310495-24HJYGFI7DYQ73O95WYF/hotel-room-service.jpg", 
          title: "In-Room Refreshments", 
          desc: "Tea, coffee, and bottled water provided daily in your room." 
        },
        { 
          image: "https://prodimagesbucket.blob.core.windows.net/roomtype-images/34243/12361/97aa8eb5-347e-4481-b0f3-05dce0135567", 
          title: "Sea View Rooms with Balcony", 
          desc: "Private balconies with stunning ocean views in select rooms." 
        },
        { 
          image: "https://blogassets.airtel.in/wp-content/uploads/2022/04/internet-services.jpg", 
          title: "High-Speed Wi-Fi", 
          desc: "Fast and reliable internet connection throughout the property." 
        },
        { 
          image: "https://poloandtweed.com/wp-content/uploads/2018/11/rawpixel-1067088-unsplash-scaled-e1611852916388.jpg", 
          title: "Daily Housekeeping", 
          desc: "Professional cleaning service to maintain room standards." 
        }
      ]
    },
    {
      category: "🍳 Food & Beverage",
      items: [
        { 
          image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=250&fit=crop", 
          title: "Continental Breakfast", 
          desc: "Start your day with complimentary breakfast featuring fresh pastries and coffee." 
        },
        { 
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop", 
          title: "In-Room Refreshments", 
          desc: "Tea, coffee, and bottled water provided daily for ultimate convenience." 
        }
      ]
    },
    {
      category: "🏊 Leisure & Recreation",
      items: [
        { 
          image: "https://oceanparadisehotelresort.com/wp-content/uploads/2025/11/Pool.jpg", 
          title: "Indoor Pool and Hot Tub", 
          desc: "Year-round swimming facility with heated spa for perfect relaxation." 
        },
        { 
          image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEo2uNIc5FQb7_nF1M2z56rLQMOn1nIJ8EBr0kspSnCf5OaTT60aAWHNoh4yeP2rLZ-voubfxXjiRUqILbLyEyNjdwgNy8DAbyJ7vZVdYaZLD3wQR8OYNMgU-ulzul8Liv5M_qsjQ=w574-h384-n-k-rw-no-v1", 
          title: "Pool n Hot Tub", 
          desc: "Therapeutic heated spa for ultimate relaxation after a long day." 
        },
        { 
          image: "https://lh3.googleusercontent.com/proxy/Muu81-SgV_cLfgfVLy_2gjIzb4aRZhwQBxYf5yLCMisMPu9llwbWGUeclj83Ps7O0-0DTszAlOGuTFsCptLcJeeNbZeBE6NzI_tKA-CW3-AV8KUqlfthe7vn65waB2WsGuaQwQi6WGT9EW1EEwO2NoekVPrzVQ=w253-h168-k-no", 
          title: "Mini Golf Area with Family Fun", 
          desc: "Family-friendly mini golf course providing entertainment for all ages." 
        }
      ]
    },
    {
      category: "🐾 Pet-Friendly",
      items: [
        { 
          image: "https://m.media-amazon.com/images/I/81nBU+l41+L._AC_UF894,1000_QL80_.jpg", 
          title: "Pet Friendly – $30/Night", 
          desc: "Welcome your furry family members with our pet-friendly rooms and services." 
        }
      ]
    },
    {
      category: "🚗 Parking & Transportation",
      items: [
        { 
          image: "https://5.imimg.com/data5/RK/RG/GT/SELLER-6953489/free-parking-finding-system-500x500.jpg", 
          title: "Free Parking",
          desc: "Complimentary parking spaces available for all registered guests." 
        },
        { 
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFRUXFxgXFhgYGB4aHhoYGhcXFxUaGh8YHSggGh0lHRcVITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EAE8QAAIBAgIGBgYFCQQJBAMBAAECAwARBCEFBhIxQVETImFxgZEyQqGxwdEUI1Ky8AcVM2JygpLC4SRDovE0U1Rzg5Ozw9JEY3SjpLTiFv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EAC0RAAICAgIBAgQFBQEAAAAAAAABAhEDIRIxQRNRBCIygXGRobHBFEJSYYIF/9oADAMBAAIRAxEAPwDh1ZWVNDHxrGMij4mphXoonojRDSnaOSc+J7B86HYdIg0bo55msuSj0m5dnaeynTR+BWNdlR3niTzNSYTDBFCqLAbhRLCYMtnuXnz7qrGBKUrIYYr7qvwqF7+dTDDjcBkK8li2QScgBck5ADmTwFUqid2B9b5P7HL/AMP/AK0dKeq2PSFpXc/3eQG9jtDIX40Q1n1hSRGgiG0pI2pOHVYMAg4i43nw50qt8ajOXzWi8I/LTDGmtYpsR1SdiP7Cnf8Atn1u7d2UHr0CvbVNtvbHUaPLV7avbVYwmCeQ2RSe3gO81gsrVZweBeT0Fy5nIedMGA1dUZydY8uH9fxlR2KADIC1Ujjb7JyyLwAsDq+q5v1jy4eXz8qMxwgbharISrUOBZv1R27/ACqqil0Scm+ygEqRICaKLggvC/aa0cUaFsqfRrdtbIQRlapjUewBYCw4Ae4CsY9r0VoGPK3f8t/ur3YvvN/YPL50TGwmG7f3Z+fLxqxBK3d7T8vfUKipENYDG/QGllhB6qljbrEZ91W8VrKx42pMSWti5pvl7Bb6Dc+mGPGqE2PJ41Rua3jiLbgT3CmsFHkkl6hYVJi3ih/TzRxcgzDaPcozNA8brfhkuIo5Jjzb6tfi3spHNIZRb6CuzWSQlRtMQi82IUe2kzHa44l8kKwryjUX8Wa58rUuYvG7R2pHLtzZix9tyKk8i8FVifkfcZrJhY9ztKeUYuP4mIHkaDYzXJzlFEiDm3XPwA9tJ74wcBfvqB8S3O3dS3JjqMUNOD1glE8ck0rsqtdgN2zuayiwORNCsXMHkdxezOzC++zMSL242IoQjm/gavYfNRSSvyNGr0UYY75mrArwUa0Ro4jEYdZFykLdXjYKd/sodm6PdC6EMlnkBCbwOLd/Ie+m6GAAWG7cKvx6MFrgkW4b/wCtWcGET0l2jz5dw+NWUKISnZHg8IN7j935/KjEDKeQqpIYyCQwFsztZWHPP50naa1tAumHzPGU7v3Ad/7Ry5A76fkoiqLl0dE0tpDCYOMSTuCxF0iSxd+VhfJf1jYd+6uTazayy4xzcCOL1YlNwO1jYbZ7TkOAFBpJWYlmJZjvJNye8mtbVCeRyOiGNRMFYw3d/wA69Aqxh8Kz5KLkW+NIOVwKnw2EeQ2RSe3gO80f0dq4N8hv2Dd/X2UwwYUKLAADkKdY2+xJZEuhf0fq4BnIdo8hkPmaPwwBRYAAVZjh5CrEeHHHyqsYpEZSb7KiR33Dyq9h9Gk+kbdgzPyFWIiBuFvx7av4WVb51RIRs9wOjAPRXx40Vg0IW4UX0KsbeiGc8gMvEmwHnRvoyPSZYxyGbeZyHl40spVpGUb2J+P0KyIS1gO0gZ/GlbEpY5C/u866ZjMXAoI2Q5ORLdY+ZpP0qyMbqoHcKaNtbA0l0LmweOXd8682LbquPHUbJWaDZXKX31hFu6pSK8kGyNpiFXiWIUeZoBNAK2UUJxOsmGQkbbSHlGLj+JrDyvQfE64yH9FGkfafrD7QAD4Glc0hlCTHSKJjuB7+HnVTE6WwsX6SdSRvWP6w35HZyHia5xpDTckn6WZm/Vvl/CvV9lDmxw4Dzyoc34Q3pryzoWK13RcocPf9eVv5U/8AKgWkda8VIDtzlFPqpaMf4cz4k0qtiWPG3dURNB8n2wpRXSL74tRzJ9/jVeTGtwAHtqQ6Jn2HfonCxsiPcWKu99hSDnc2PCrkOq2LJIMDx7JiDdKpjt0z9HEbOASC3EA7qRygu2NcgNJIx3k1HTLp/Vf6JCryzKZXkmRYlQkfUTPDKxc2AG0uQtcg8KWjRjJSVoG/J5Xhr2vKYx6m+r+F9EVQTfRDB+iKlIeIe0LofZs7i7cB9nt76JMn9twg/wB591qN6O0aW6xyX2nu7O2qmmMP0eOwd7AbEp7AArXOe7xqvGkS5WxohQWN91jfyrNI47BYWPpJpQzH0Ikszue71R+s1h37qTtO65gAxYazE3BkIyHA7AO/9o5cgaS3csSzEljmSTck9pozyrpAhib2wnp3TkmJY3AjjvlGu7LcWPrntPgBQu1YBUkURY2UEnkK522zoSpGgFTQQM5sqkns/GVGtH6vE5ym36o+J+VMeEwSoLKoA7KaONsWWRIVMToYxxGRzndRYdpt40S1IhDPLcA9RfvUR1lw5+jM1stpPvVW1CXrzfsp9406jU0hHK4NjTHoxN4uvcfnWCIKcxfsP9KLYCHaZRzIHtozpjQFl+rDP3KbedrVdpI59sWhOhFiNn3ezdWrw8QbitZsMQbEEVEARu9lYxtavVrZJuYvUyqrbjnyrGLGAx7x5qxB7DVp9LOd7GhbxEcL91VMTpKKL9JIqdl9pv4VuaNpAqwy+KJqEkmlbFa5RLlHE0h5udhfJbsfEigWkNc8QwI6URD7MI2PaLv7aDmvA6xs6HiysQvK6RD9dgp8B6R8BS/jdbcKn6MSTHsHRr4lhteS1ziXH3JNiWO8k5nvO81XfEOeNu6l+d9DKMV2N+P1ynb0OjhX9UXb+J7+wClrF6S2zd3eRubEsfNjVHoiaZcNqBpF4PpK4VzFs7Qa6AlbXuFLB2Fs8hW9L/JjKaXSFx8aeAA9tWMBgzMk7FyOhh6W32vroYrdn6W9+yqDrR7Vhfqcf/8ADJ//AC8JW4JBcmxfNYKw0WwGrs0sLTrsCMbdtuRULlADIIwxu5UEE25gb8qSclHsyVhrUzREM0OIeXDzSlFPXUkBCY26IKEzdy4BIYbKorMaLa16O0bHh8Iqyhwsc6lsMFZpZLxjbdmsAt9rLMgWAvY0H0VoDSAWSLpGw0I6VpdqUooMQi6UssZJJCyR7xmDlRLR/wCTwE3knuCryIIkYmWJIopNtDsls2mRbBGPVfLICuKclzty+xRddBjF/lDgXEYho4UlBxEEsZRGUyhQwd3Z7sGBYBervAypfxGvEqHoYYBsKixqmJLTSbazNMHY9W7iRjZSpAsBY00QQYXBDY6ZbImKW77Kt1cbgXUEABtqwf8AgNgKhxGuGAiScK5kaSaeSyxb2+l9LE+0bA3jVRc7RzAGyBnFKP8AbFsP3E3HYTSOLdFmjkz6eVDIoiQBpDNiH2nCgKGe5ucrjmKuaM/J1NIkjvNDEFZkU7QdHZUDnrodhR1lAJN7m1sjUuM/KGxZ9mFXV5cYWExLbUOJaM9GQrAjZ6Ncw3AUGm1yxRDqjLEjEkJHGqhLoIyIjYtHdAFJDXPE10JZqpJIGhcNeVsa1rrFPV3iiODHVFD0U3olhF6oqUxonTdK6Sw8CbbS/squbMeQBsR3nIUg6c01JinDPkEBVByUnO54k0Onnd22nZnY2zYknLdvrES9GeRsWGNIwVsikmwFzwAoto/QTvm3UX2nw4UyaP0UkeSrnz3k0IwbGc0hf0foFmzkOyOQ3/0pjweBVBZVt8e88aJxYI+tl76K4IRLw8TmatHGkQlkbBmHwTHsH44VaOG2adtC4XCyA2NyN9zsgd98z4A1tpjRuGK/pLH9QD3nM/jdT6uhPFnMNbCThyP10qlqCvXm/ZT7xo7rZo8CE7OY219zUL1Ihs8v7Ke9qXj85RNemx3wE5jYON6m/lnRHF61O+W4dlCGcKpJIVbHNiAN3M5UsYrWKCP1jIeUYv8A4mIXyJqjaXZJJvoZZ8Tt1GmGZswCbb+zvPCkbG67sMo0jj7W+sbwGSj+E0t6S0/LNlLJJKOTHq+CjqjwFLzvpDrH7s6RjdL4WK4edSw3rH9YfEr1R4tS9jtcAP0UdhzlPwQ2/wAVJJnY5bu7+tFcFqljZkaWPDSuihiz7OXV9LNrXIschnlQ4yfehqiv9m2P1mlkuGlYr9leqPZa/jehDYs+qABTFpDU4YeDpZ8XhlkZEkjw6sXlYPYrtCwCdU3vnups1L1QwcuGwjzYfEStiRiduVX2Y8OIXZAzWA32G8nMGm4RStg5vpHLWZjvJo4upWO6FsR9FlESqXZiAtlG82YhiO4Gn3H6vIdBhFhJeKGLHdLs221meUMt7ZlYtltm/KmnTSi+LeCSWTFpgUH0dmIjWJ41DvGoB23ABPeQON6a0uhdvs5jg9QSjucVJsQR4ZMTJJHmfrP0US7QF5GsezLupo1W1QwAbCyToWjl0fPiZeka4VkeHrC1rbKs9HdLaUw8vR6LxHRxRzYCGVZ2IFplW8d75WAT2W40uvrNhYYYI2mVmTRuLwrhLuBLI0fRrcCxB2Wz3ZVrk0FVYUweqggiiwc1ig0qnWP95EYtuO/PaFgRzJFaaKY4zS2Lilx2LgmE00McUNwOgS9iSVZYxZVsbC5ItvFJ+k/yhvLo/D4RlPTQSI6zbXCO/R5b9oXGf6o51FpX8qmPmiaPajj2wFd40Cu4Atm1zbwtR4yrYE0JWPi2XZR6rEeRIo1qkPqtI/8AwW//AGsJS85oloXSnQpiV2C3T4doMj6N5YpNrt/R2t20ktseIKNN2gtb1w+CkwwSVmYSixkBhIkXYDNGykhkzI2Ctza97Uq9Ca3XDH/IfO1SyY1PUhk6GXSuvOImDqEhjEglD7CsS3TCISm7scz0Sbt2dL8mkpT0d5XPRLsx9Y9Rbk2S3ojM7qng0S7bkY/ju+NE8NqtM3qAd/8AW9LHHCPQW2Lg7PZW3RNy88vfTlDqi3rOBV2DVWIbyT3ZU+hbEAQH/K5qRMGTwJ/HjXSYdBQL6gPfVyPCoNwAoWa0c1i0NIdyed/jVyPV2TjYfjsro8eBvuU+VqoaUx8GHyYbT/YWxI/aO5ff2VmFOxRh1cHE59gv76H4zBdGwQ7QIGYuMszy/rTtq5pSTETEFAsZViLA5bNuJ33v8txpe1ujtinF7+zLO3kMvCpT6seL3QJwOipJMwNleZ+HOjei9GKmLiTeCjE34mz8u6mbB6NX13C9nzNR4rCImkMOFdHBhc3Q3t+kFj21RY6oT1LC+H0YhyC2PDM/OjuB1VmtdW2b9gN/DefCqDx3Rrb7ZVrgNKzxLsK7AHM1Zr2Ip+5JpHAzxGzx3HA2Iv50OuOKsO7OptIaaKZzSBb7to2v3DefC9AcVrjEvoI0p/gXzILf4aVyS7YVBvpDBDIvB7d+XvqSWUJm8igdrAX7udImM1qxEmSlIl5Iufi7XbyIqlh5De+Zbmc/fS+sh/Rfk7XoTQ0GLhJZxa/DLhvIa2WZpB0lDNh5Z1wyGQKAHKZ7Au2y27id3dTD+TTCmWX64XQITsknM3W17bxvyqz+VzEfRxAIQEBEgIUBQf0ZzAq2KPqZOPuRm+EXL2OXDA4jEnbLKMyoMrMzEqAWCIis5sGX0VI6woZpzR3RKGErv13jcNEYtllVGyBYkgh/WCnLdnXQNS8YSJH6f6OfomMPTAFuj+uwQ2rDMkUt/lB0smJLzRklWxJAZhYtsYXDRliOFypNu2meNKTQym3FMEaA1Z6eGWd54YEQ7CmU7Ikl2GcRg7lOyN55jfem9dRMPFJGHjxboqmWaR1WOJ1XDNN0cJF2YltlS3ABuNDNQNZIMLBMJZ3Xaa7YfoxImITomUJcj6ptsi7XHVtv4WtI68Yfpo54Ip3lUBXE8v1TR9CYZEWNSbBhnfnQt3oKLuG+jywCWHCfR74rAdXNuuWkDGMtnsEhfEGm92Usqoz/AEknSjYVdu0LSCZlIcDNm2WOzfLI1zeLXzFLK0kBWBTHHEsaKGVI479GF2wcwWY7W+7Ghi4wsFEkpsu1s7b7i52ntc72OZ51Kc0i0MTY+a6sxwir02BSM4bD3QkHEyMqIdncSALDluNKWO1gP5vweDjklUJ9J+koCVVhJMHjGR63VL78heh8s0AFgxJ5KpI88h7agaJnyjhfvP8AQGljlfhDPFFdsP6R/KLiTO7x9WFozCuHclkWMoE3CwJ6t78LkUu4zWnFPN9I6Zll2BHtJ1DsABQvUtwAqxHq5O29Nnvq7BqefWcDuqqnRFxQpyTs2ZJOQFySchuHhWmyx/Hyp9i1UhHpEtV+HQ8K7ox450HkYOKObx4J23AnuFXoNX5m3Rt4/gV0ePDW9FfIfKrKYZuVLyYdCDBqfKd5VfbRKDUxfXkv3D504rhOZH48KnTDLxN/x40Nm5CrDq1AvAnvNEMNo+MehGPAX91MMcSD1asxzgcBW4g5ME4XRMr+jE3kB77UcwmpeIYXIUdharOG0o3AXPZnRbDaTxPCJx2lSB5tlWo1gfC6mqxKtMVcb02LHvzOY7RevZtUo03l27zb7oFHMZpQulnWEMNzNIt1POwJNL+Il+1iAf2VdveAPbWX+zMqSaPiXco8c/fUZsNwt3ZVI2ySbFzyuoXv3E5fOtDCeGXt+Ap6FAmseExEiWgl2DxXdtX/AF94sOA30Gw+pgEZ2pPrLdUgdUHtuLkd1OLYXmW87VGcEn2b9+dK4WMptAhoZFVEWaBNgACyEnJCtzeTMm991I+tKMJyHfbawJa1r3uQbcMiMq6h0QG4AVzzXj/S2/ZT7oqeSOimJ2wwmuWGb+8T95JE/wDIVVGlYGxscodAiwvdg20L/WG3og3zGVqTocEg4X7862kGQ7199RfxFlV8PQ94/XiEKUijeQnK5+rHtBY+QpcxOtGJa4V+jH/tixt+0SWHgRQfZrLUHmlIaOGMTZmJO0SSTvJNye8nM1sBWqipEWksc2QUX0ThrsKGwJTBoo7JuQ3l86rBbJTejp2p9o892XypW/LJjNowZ/63/t1LgdYdnIRNsqCXJIuFuouoDWNgSSCcwMsxYi9NytjTG5iVEsWjudosrAX2gd2Wzlv313Y8qxzUjilByVCpo7TiRwtG3S3KSxMI9gB45Wicgu4Yobx8EPDMZihmPxIlVI4YTGis7W2zIzM4RSSdkDci2AA486dMHq9Gt7JCxX0utmMr5g7VsqIYOOIqlrKz7lAGQz2mZhlYDs4gUssrk7KJJKjm0GgZ23Rt4i3vonh9UJjvKr3m/urpmHwCcST3MBz+0o9/GiOF0fCb/V3zyvd+A+yWHOk2w3RzODVBfXlJ7ALUTwuqsA3Rs3fc10E4WMZbKr4bPyqvNhxwuTyGdDiDmL2E1fA9GNF7yv8AU0xaL1Z2vSmjU8BmfgKrmA9vjb4E1LhnCnPbPYLD25+6jQLDaamJbN3PamyR5E3qrjdW8OnrHue4PkRXuHxgG5GPe5/lC1JLK0huVTvI2j/9haskzNqgO2AiG4Co2iRfsr5D5UWbRrtx8gB921TRaJtw9lECF3pVIuCT3KTxtwBrVwbZI53bxs8Rf0iDuvwpjmiUb2Ud7AVRklj+2vgb+6sEFhH+wB3t8gffWyRvzUdwPZ29tXGdeFz4GoTLa/VOZv7FHwraBs8WE8ST4W91WIo7cvIH3ioPpR+wfP8ApWfTH4KPI/0o2jUwojybttwOQYgeQNq2GFJ30K/OEvCw8B8Sa8+nTH+8I7rD7oocl4NQZ/Nl69/NIGZoGXkO+WQ/vMfea2jwqn0to1rZqDDwxLveMfvD51BLiIR648AT7hUmAwsI34eR/wCL4UXGEw6ptrh8wPRkQHa/eIyPbQcqDQsyaQi4Enw+dVnx68FY+X9aNYpr7oIk7nT3Ag0NljY8PKjbBRTOKJ9T2/0pB11F8UScuon3RXQjC3I+Y+dIOu62xOeXUTjfhU8nRTHVivh3b1iOy3x4VuwvYDmPfV3BxwCRSZEkDbNyXSPYFgWDBtq5uWsAeGdGUgj+mIqFWXoyciGF+txXLlXMsO7On1dUAItHytuTzIHvN6vQatzP2dylvkK6HowojBmTaA4DI7rcO+pXxil2HWXityqhQd19pet7K6FgiuyDzyfQjxapSDMg+JA91zR/QuqcBYCWWNO9Wb7wtR7pEA/0mC/Lef8AC9QNjI2GUoP7CuPnVFjiuiTySfYTg1Pwlh/ab9ilF9hNC8bq6sbEXyubEhrHxtY+BrxNJMlwgfPeVYjzvVzBQCSzl02j6rMQ3idkj20yVCt2BNIqEiYbrhlyUjercbWNQYeAykKPVRR2DcPhRXXhmSDYKKOsOspLX6j5XsBQ7VVrtJ+ynvalbTdDpfLZbTV8MxklY7QvboboSLgrtFtraOyNndx42onFgo7BVjtkASTdj32Cjfnuqyi5EXIuLXG8doqFsMBukc/vW9xFNSQttk0Wr1xex7zWTaKjXfPsnltr7t9T4fEwqLSQwvbiQXPjtPUuJbDy7kijy4bK/wA1KEEnEMnoYkkdx94rxdIyk5hH70F/Mi/togMBEPXj8FY/dPwqKXDJwLH9wj3rWoFlnDYaeRdoYe4/VY38rkeyq2Kwzx5vG6g8xf3Ba8w+J2DYC57r+w0XZnZFZgSDuUBQR2m9rVg6AEWMcevGB+wwP3mHuq5FipDum/hCD351ZYIM+gJPaR/KpqpiFB/uFHn8FFYxOEdhnNMf3j8MqF4+WJCVkmFxa4Y3IuLjnzFSrhGJy2U/j+ZoTrho9Y0WUsXd2CswucgthkbcFHHhWMbNpPDD1r9yv8QKnw2scKnJf/rU/epQwUZlYgMFAVmJOVgq7RuBflzNXcEY4ixmTplyW4k2bMQTwtnYbj2ZUyxyYkssEdM1b1kGIYxqgGyhYnYCki6rbqN+tVqfCSksSWN2vkF+yo5k8LeFc6wOJXYlkw4kS0kSrYhzYpMTmADa6jdnRTRmn8SGVPpClmNtlg5Iz5yIR4XFLxH5IZX0a55jvF/lVSbAW3tbuAH3r1DjNIrKwaRlcjq2GW4nO1weJqRMRCouYNruj2v5zWMVpIF/1ntUe4VGFj+3/jPwNXPzzhr2EdjyIRbebZVYjxSP6IA/4v8A4A1jFBej7fJj8KmjxCDdteCtUk8AG8J49If+3QyadF3Kngp+QrWYKHSScRIf4f5mr1cSrejA58V+BNAvzqRuRfL+tbDTEnBF8l+L1jB9ek4YcDvkA/lrWQTf6uId8gPxFC4dLOd9x3Kn/wDVXI8WzetKe4Ae7DmsYjmWXjseAv8Az2rnOvQP0nrb+jTs59tdKkikO5Zz3y7P/ZFc614jZcSBICG6NN7bXPiaWfQ+Ps5vtAXG/K2/8GmnUFfrV7pPcKX8ZhSzEqlhy2k5nfs2HHgAKYtS7QzKZGRQEck7S2F8syCR8c6imrX4ladMctZU/sc4/UA83WuRq+z6JI7rj3V1vSuk8JJC8XTxNt7KkCVVNi6XzNwLC5uRwpf0nh9HYYBIQcTfrG00JUNYixLIzc/VHOrTabJQTS2hW0bj5iwHTyqP944HvqKPT+LH/qJvFyffRuE4aQn+zLHlvOKC+QEPttUGL0bAGVomYnirSRtztYgKT4qKQb7FBdaMWP8A1DHv2T7xTFqfpefEzdHJLdereyoDm4BzVQfbQrDS41Mo5dhdxs8Qy8DTOjNZQuPxAaxZ2M11LFb2A+kD1ur6JvvuNwaP4gl+AV1owTRQrd9oFwLbIGeyxBuOwHzr3UzMy/sp73pZbGYhltPZgLdcTbeZ4bIaw4524dtM2pO+Xuj970FK5h41AYdKYkxYeaQC5SKRwOZVGYe6udxflCcnPDJf9s+5kNdB01/ouIyB+plyO4/Vtv7K4+MWH6vQQdbK6qVO++RVudqpO7JxqtnVcHpmIQQyuhXpIw5ChSFuSLcOXKgWk/yhxLI0XQFgjWB2RmOebixrTR8qmKFMUjxxpEoEkTbWyoLEdKrpdd+ZW4HGlPW/RLRyvIoBgkf6qQm+0oGZUrkR225U8nHguP1eScOTm7+nwPOgtbknfo4YSHy9NFtmTbMOeXKp9J66QwSmLECVWADHYC2zFxmpvupM1AxkcMzPIb/o/QF/RJvyF/keVSa56LnxeMaXDQySK0cdrDPJQDcXpHfGymrobBr5o8iwaQd4f4Kang1ywA/vnH7zC3h0NcxOqeP/ANkm/gNSf/5LHWH9km3cU7SaXkw8UdWXW7BvZUxmZyAYXueWbrUzY6JmWPpE6RxtIrAKzjOxUdISwybMcq5ponVswomIxLrHdlaOMEM7KrZsRcBVNrAk899Mss+HMuH0g7SqkEaxBdhSH/S2YsXCopMhAJOZUgXsbFMDSHAskNmZoEvu20v2G1gTwoFrfpHahj2OjKEu20ibPWQAWzsT6fLxoVrTsaRROjEtoxtZBWvbavsna2SbN6JIJtleoMLh1XArEA14piM7A7MwL2ZRkGvHwJ30bSeweCrq+22krHI9BiN3+776gbGzDENh7AoD0hy6wGzYG4O67WueJFT6GxMahwpJvFKACDmWSyjcL3reLFlJZWEbIvQopDrvA6R2BuwublTe5Nwd9Vv2Oen5Qb0RhxJBMHn6H62ElmUvfqTgKc78b+FXtHaC+thZcXhnG0CBd0Y2cDIFTxU0PgxMbYaV0IKvNh813X6Oa437wbjvFeaHb+0YC+/b97vxqeyzGiLSMcrGMwqC1xcq5sTut1iAe3dUi6IiGbITn8DzNqE6J0xhjOApfaLqoGzbNjsjjuuaYcfiBFaQq7hb9VBtMbgjIcd9+y1ag2aw4BTksbj+A/Gq+kNH9EwUhRdQcwpOZIyt3VvhdbIl3wYhets7OwLnfmo2usLBjlyr3WjRgnxMeIDqAscW9bmyyyPe9xa97bsqMavb0CTaWtkTaMnjuejiGVxuv42jPxrG0tiEAsreBQfy/jlTPi2uvh8KXtJRkXZMyFW3Gzbf2d24nyoIZlGXW5FYxzsystrqzi+YBGQA4EbqhbWTDNa0lrgEX6TiLgjKlt8NKcdimB2QRFmVuGsHvslr7viK5suhMSxP1Eu4kExvnYZAdXwFI20OkmdgxWsKDdLHbvm+CVTfXGJfSlTzl+Nq5SNBYn/Zp/8AlN8q8/MeK/2af/lN8qHJm4o6umvuHG+SM/xfzmgeseMTFSiWIgpsAZcwSDupE/MeK/2af/lP8qaNCxNFCqSKyN1jsspU2LG2RpZSY8YpMXunG+9eu97WIOYqMQxW9hzNweHL3HdU3Qq7Mdo7TZk3vvN77ue/dXJSRX1TIzWSndWp0ZkSJMwc87XGV+4762bDPkU6wIPEduefh7a2vcPqIyA51MjVUWGS4y2QeJv8ibX5A1JI9rhbHlmL+/upqN6iLitVhGofE+V9w+QzqZMQN4yHaePfYVjckwijU3akb5e5P56S4m/HlTlqQc5e5P56ri+oTL9Iy6Ut9HmvmOikv3bDXrmTx4c+pb923jk1dH03f6LiNkXPQy2A3k9G1hXMo1mIJGGkIAux6KWwG8k5V1OVHKo2WFjiO9jn62ySQOy7ndc+dbDD4cKFkZ2Rb2ZlXIE3bK4Ki54GqmjpHnJEMauVAJsdkC+7ORwOByvWumIJY+jEqoqM4Bs6te3WsdhzbhypXLyMok2GweHlYDDySK4tsgIzE79wdr35WJvRVcNiyqxiLEbKm4c4aRGte9hZrDeeFVtW9GdLi4nQqBEVaUnqfZNgBe5JDWA5Z2Fq6oiDl5XoxySrsMuPsLmidLvHEqTYfFuy3G10V7rfq3N7kgWzO+opNcQGYC6DcRJEMs7WP1nblkKbEgHKqOL1dgaQTGNultYOGkVgLEZFCOBNBt+4FXsA5dZILMS5ZrEqrxsgJt1QzgtbgL27qD4nWCfZDRjDCa4DFUa2wAdmxKBgc91+BpkxmqeGk/SLI/7c8zdvrS86Ufyi6FggwyPEihjMoYg3JHRynMlmJ3DfQblQy4tkba1SyK8eIuzK1h1yVXqgg2csDvPCrGi50lwsmyST08e0xVVBOxLbZC8LDiTSlq3HtuiH1pkU+JQce+ukaT0WuHishJDSKTfZyISQeqotv5VOabSZSMkk4iFiMCOkgiB2rSquf2QRf2A0xaewpld9vqbaAEAeibg3FiM9/Z1jUugtErPiCxJBjYMtv1tpST4V5POzttMbk8effWhpAntlnQAjgwzJJGZl6WOwDGKxCYh9r6sE5AN76fMHq9hw0bCPNNlkbbc2JYtaxaxtcZm970t6p4FJVkVwxAZGGy7JnsyDejAnInLdTujZW5ZVZNcUSkvmOODG7MgZI0KwEEGxykZ9pL7JzIK7u+4O6jeE1lnnZY2cRda/UjkLMQpvH9SdscTlb0Dzq3rqx+i7z+kTlyblS1qsL4iG5/vG/wCjLU4ylTtBaVjxi8S91dDKV2TtR9DNdnYr1tqVL2WzC1/WNWNFy/U2lkba6460TrYGR2UZKRYBgPCrSYNN5N/C3tz91etCg3WHmflWqT7DaSJY9Pwsdn6xd+bIQuXaCd/dUcukoUba6VTe24Nla+/q5b602x+r5299amcDivhn8BTUwWr6An0dWdn+kYYBr5NIVIzO8FMqpoyKdjpoSQdm4Ztm97X2igW3be1Mbzk/5gfD41qsZP8AmPiKbYNAmwtfpITb7MyN7FNz4VHJOMgOsTwUgnLfvIo6uHZjYm3aWyrZsGF3Z9w+dqNsGqAcbsf7qTyX/wAqVtbr9OLqV6i5MM955GujAW4Vz7X03xI4fVrv727KSb0PjSs5qL5538e6t/pBHE2z8uNXfzNMchH5sq+9hVrD6uyes8SjjZixtf8AUBv51CrKAyHEezgeN9/Hj8Ksw4wLmN1924A/i3nRIarx7ziVHYqE/eK1bh0JhhveR8uQ+TUHjsXQEg0ntAq/lzzuPgOO+q2JAVyVF1ItYCw8LeFOMOjcKBlG5z4sf5QnOrUccAy+jR2H2lv97aorEl0axLM6OLFlB3nK2fad5OZOWRtbKvYkc7OyjMMtyknIW3AXPDyp7ixgXJIkT9lVX7qitzpWXcD94/zUfTMmK+D0XiWz6CXf6yFfvWFO2p0DIZAy7JshtcHi/IntocdJSc/ID4g++tocc6m6uVJtfO+WZzvlxNPGFOwyk2qHWeIGN1YlVKMGK5EAggkEZ3saXn1ZwBN5EklI3bcjt73qsNMNa1oz3rb7pFWY9L33qR2qxHvvSZoZJtcJV9rFg4x7Rag1ewI9HBoe9L++9X8LovDKepg4FPPo0H8tCk0mn+smHeVI+dWE0ipyEw/eDD+lS/pMj+rI/skv4G9Rf4/uH0S3orEv47KlUt9tR3LegUc7cGVv2WB99Y2lCMiGHt+6aK+Cj/dKT/6f8UD1X4S/IOvHffLJ4Er7jaoo8DCG2sy2+5NzmCDmRlkTQiPS6/at3k/EVONIpvZ0XhtNkLndnbwqkfhcMNpfqwOcnoMF8rBsuWVIP5WF/ssed/r1/wClLTY2JNuqpcc0Fx4Fb0ua04ZcXGsT9IgV9sWUXvZlt1jusx4VVyTWgJNM59qqfrYv9/H95K6vrRIOhW+Q6QZ/utSXo3VgwsrKJX2XDj0RmpBG/hlTRI5lGzJhGkB4Ehh5FiKVtVQfNkepa/WzHmE+81A4zTHoHDGB5C0RiRgNgbSWABOVgbjfyqoNV8FwVv3ZJB3bmFcs/i8OOPzSRVY5SekGNShlL3p/PTHLi0Q2d0UncGYAnuBNzSrgcBFECi9KVY3IaWRgSMuBBIz3EkdlEsGioLRokQOZCKqb999kAk95qEf/AEnLWLHKX6L82F4EtykkV9adDPPD0alVO0Guxyyv386B6C1caGRXkkTqttAJtNfqlLG4UDJjx5U1lE3k3PfWJLGOGfnVEvjMnfGP6v8AhCt4o+7PRKDuuO8E+0C1avIONS9KW3bQ8TUixc2r0IJpJN2c7q9FMlDWCMHh7bVdaw4r4m3wrFz4LbsP+VNZip9GH2T4Gs6ADg3l/WrZjX8f0rSQjt86JiDaXgT5VBI7cCfZUpW+8GvPow4k28K10AqlpBn1iN348jSLrs98QL5Ho13+NdUCw9Cd+zfO9tra4ePsrlevLAYm36i77czyyqU5aKwWwO+Bddwv2qT7t9Qju3c+dZWUBrJUksb2H493jViOft9lZWUUBkqz/i9SifjxrKyiA26W44/j2Vo0grysogPDLzvWdIK9rKxjBPbmOdSfSSd2XgTl317WVrMaiU8fjuqVcRfhx9nvrKyjZqJEk2rApfPjVqGYraxIztYZe61ZWVrNRcGlZbb72PEXPtvQ7SpkkDDaAFxkFy58+dZWUJJNUzJ09C5NomUG4CHkdx7DuPvrZZMUvryDulb51lZXO8EC6zSLsMuJO+Zx/wAcj3sKIRYeZsnkkYdsrHyzrKykfw0H23+ZvVYZjJG8Wy763M5HrA+BrysrY/gsENqK/cSWWb8mw0qRuFu4kVImkieJArKyuuqJFmLE33P7qsrKBvI939KysprATDHAbrHuIqN8Ve+W/n8wxrysrAJYsWB/mfiKm/OY51lZWMRHFg8a3SWsrKJiYTDnUTy8rVlZShIzJYe2348a57ru21iAf/bX3tXtZUplMZ//2Q==", 
          title: "Secure Parking", 
          desc: "Safe and monitored parking area with 24/7 surveillance cameras." 
        },
        { 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxzVexK7wc199AUPFEtzhlWx9YzXJSf8VNw&s", 
          title: "Luggage Assistance", 
          desc: "Professional luggage handling and assistance for guests." 
        }
      ]
    },
    {
      category: "🧳 Guest Services",
      items: [
        { 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqYShkKGL6zL6f86DKblCgnYMFNq6FGiZVw&s", 
          title: "24/7 Concierge", 
          desc: "Round-the-clock professional assistance for travel planning and guidance." 
        },
        { 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKNW36aPBmzyJ8oGbTQVajoVpw5kkeFV_Ng&s", 
          title: "Guest Laundry", 
          desc: "On-site laundry facilities available for guest convenience." 
        },
        { 
          image: "https://lh6.googleusercontent.com/proxy/ES3_9roeVsNEw8m0FPc8PpaUFugaAw1RmWJ2_BtArD_IUWoz_0kED7ZaJUxHaDp9KP347fktc6f74XJ0NxL78dg1UH-voVerh1UtvuDRneF7qMwWCj4-YvXu9FTrl2THLldNJDo4ENefN5WHRZ4wZQ397jS7zQ=w253-h189-k-no", 
          title: "Comfortable Areas for Team Alignment", 
          desc: "Quiet areas available for small group gatherings and meetings." 
        },
        { 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbaO_P9AhwTJsAGLAzIHlTz22zZZVrUwSsg&s", 
          title: "Power Backup", 
          desc: "Uninterrupted power supply ensuring all amenities remain functional." 
        }
      ]
    }
  ];

  // State management
  const [currentSlides, setCurrentSlides] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Mobile detection with proper initialization
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Reset slides when switching between mobile/desktop
      if (mobile !== isMobile) {
        const resetSlides = {};
        amenitiesData.forEach((_, index) => {
          resetSlides[index] = 0;
        });
        setCurrentSlides(resetSlides);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile, amenitiesData]);

  // Initialize slides for each category
  useEffect(() => {
    const initialSlides = {};
    amenitiesData.forEach((_, index) => {
      initialSlides[index] = 0;
    });
    setCurrentSlides(initialSlides);
  }, []);

  // Auto slide functionality with proper mobile detection
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides(prev => {
        const newSlides = { ...prev };
        amenitiesData.forEach((section, index) => {
          const itemsPerSlide = isMobile ? 2 : 3;
          if (section.items.length > itemsPerSlide) {
            const maxSlide = Math.ceil(section.items.length / itemsPerSlide) - 1;
            const currentSlide = prev[index] || 0;
            newSlides[index] = currentSlide >= maxSlide ? 0 : currentSlide + 1;
          }
        });
        return newSlides;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Navigate to specific slide
  const goToSlide = (categoryIndex, slideIndex) => {
    setCurrentSlides(prev => ({
      ...prev,
      [categoryIndex]: slideIndex
    }));
  };

  // Get visible items for current slide
  const getVisibleItems = (items, currentSlide) => {
    const itemsPerSlide = isMobile ? 2 : 3;
    const startIndex = currentSlide * itemsPerSlide;
    return items.slice(startIndex, startIndex + itemsPerSlide);
  };

  // Calculate total slides needed
  const getTotalSlides = (itemsLength) => {
    const itemsPerSlide = isMobile ? 2 : 3;
    return Math.ceil(itemsLength / itemsPerSlide);
  };

  // Check if dots should be shown
  const shouldShowDots = (itemsLength) => {
    const itemsPerSlide = isMobile ? 2 : 3;
    return itemsLength > itemsPerSlide;
  };

  return (
    <div className="ocean-amenities-main">
      {/* Hero Section */}
      <div className="ocean-hero-banner">
        <img 
          src={image132} 
          alt="Hotel Amenities" 
          className="ocean-hero-img"
        />
        <div className="ocean-hero-content-overlay">
          <h1>Hotel Amenities</h1>
          <p>Comfortable stay with essential facilities</p>
        </div>
      </div>

      {/* Amenities Container */}
      <div className="ocean-amenities-container">
        {amenitiesData.map((section, sectionIndex) => (
          <section key={sectionIndex} className="ocean-amenity-category">
            <h2>{section.category}</h2>
            
            <div className="ocean-slider-container">
              {/* Cards Grid */}
              <div className="ocean-amenities-layout">
                {getVisibleItems(section.items, currentSlides[sectionIndex] || 0).map((item, index) => (
                  <div key={`${sectionIndex}-${index}-${currentSlides[sectionIndex] || 0}`} className="ocean-amenity-item">
                    <div className="ocean-item-image">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = image132;
                        }}
                      />
                    </div>
                    <div className="ocean-item-details">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Dots Navigation */}
              {shouldShowDots(section.items.length) && (
                <div className="ocean-dots-container">
                  {Array.from({ length: getTotalSlides(section.items.length) }).map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      className={`ocean-dot ${(currentSlides[sectionIndex] || 0) === dotIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(sectionIndex, dotIndex)}
                      aria-label={`Go to slide ${dotIndex + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
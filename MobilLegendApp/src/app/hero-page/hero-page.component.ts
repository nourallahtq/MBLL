import { Component, OnInit } from '@angular/core';
import { Hero } from '../dtos/Hero';
import { Speciality } from "../dtos/speciality";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'kaja',
    image_path : 'https://a-static.besthdwallpaper.com/skyblocker-kaja-mobile-legends-ml-wallpaper-3554x1999-67920_53.jpg',
    speciality: {
      name : "sss",
      value : 19
    },
    build:{
      name:"Berserker's Fury",
      Image_path: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIREhISEhISEhISEhESEhISEhEREQ8SGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDtAPy40NTEBDAwMEA8QHhISHjQhISE0NDE0NDE0NDE0NDQ0NDQ0NDQ0NDQ/NDQxNDQ0NDQ0MTQ0ND0xNDQxNDQ0NDE0MTE0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xAA1EAACAQMCBAUDAwMDBQAAAAABAgADBBEFIQYSMUETIlFhcQcygSNCwRSRoVJisRUWJNHh/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAMEAgEF/8QAJREAAwACAwADAAICAwAAAAAAAAECAxESITEEIkEyURNhQlJx/9oADAMBAAIRAxEAPwDs0IQgAQhCABCEIAeQjVasqAs7BQO5IExev/UClRytH9Rxke2ZqIqnpIzVKfTaVqyIMswUepmc1bje0twcOKjD9qnecyvNXvb1iS701J+0EgQt9GUbvlm995VHxf8AsxFZ/wCjRXX1Hq1MijTK+hIzKerr+oVied1AP+3/AOyfaaQXxypgfEvLTQVAzUOAI3hjj/YvnVGLNrcVTuc/AiamikfecTV6pqtGiPDpKGbpmZytUqVN3OB8xsyq71oXVNMhVrKmmOU7zxLh0+0xFxdU06tmVdxqo6KJpqF6C5Pw01vxNdUscrrt7S9svqHUXHiLzfAxOXvfOY0bp/WIuYf4Nnmv073pnG9tWxzEUz/uM0lvcpUHMjBge4ny7/Vv6y103iy6t2BSoxAx5SxxJbxr8Hzb/T6ThOacO/U6nU5UuAEY7ZHSdDtLynWUMjKwPoQYly0MT2SYQhOHQhCEACEIQAIQhAAhCEACEIQA8lVrWt07VCzkc3Ze8i8Q68lvTbBHNg/icnubmrfVCSTyZ79JThwOu34IyZlPS9JOtcR3N+5RGIpk9BGrPRlTzVN29/WT7SzWnhKYy3rNHp+ik4ap84lz4Y10S/a2VVlpzvsowvxL610inTALbmWKBUGFGMRJOTJrzN+DZxpengAA2GAJlNf19mbwqR36EiWvE2oeDTKr9zDEymnUAoNR/uO+8Zhx8u2ZyXrpDVTkoKXqHLnfeZu/1l3JC7CJ1q7arUIz5QZBK4jKp+I5E9bY2+Sck5ngQCLMSYlvY1INoktG3ptGmRpimzakdJESYzvPQ0U2xilC8y/4e4rubNhyVCUzkr1z/eZ8GE576dS0fRXCnGFG+UDIWpgZU4yTNTPlOzvHouHpsVYEHIOJ2XgLjxLgCjXYLUA2PY/mKqdeGjpEIlSDuN4qZAIQhAAhCEACEIQA8lJrusLRUqpy2PXpJOs6mtuhP7j9onMtWunqE7klzk+wlXx8HN7fhPmy8VpekDUK73dQrk8udz6yfaWvSnTHyRE2FmdkQZY9TNvpmlrRQEjzmWXkULX6TRLp9kbTdLWkMsMtJ5OYtwTElZDVun2VKePggwXrPSJ4BvBaAxPFVQtVC9s/zGqw/SIHXEncV2hDioBn4kG1qArvsPeXYXpEdr7bMDWGHYHrkxDzRa3pOSalPB9cTPvt16zNrTHS9jRESRE1K4EjNVY+0TVJMcpZKLARJcSNzGeZmeRpSPMViCBG4RbpGlIvlnhET4gi6VKo5wiE/iZfYdIR8xdGqyMHQkMDkES0o8O1cc1TCjrvkStvaao3KpzONaOqk/DtP0742W4VaFZsVBspJ+/adHnyhaXL0nV0JVlIORPoHgLidb2goY/qKACNuwmKX6aNfCEJkAhCEAPI3WqhFLE4ABMcmQ431Qoq0UOGfc/E1EOqSRm64zsoNW1E3FVmzmmD5BK1k323YnAigOVZccM6aatTxGHlE9etYY6POSd3su+HNJFNA7jzHBly653iyRgAbATwzzKt1W2XTCSGGSINOSsTwrOb0a0QnpxHgk+w7ye4VVLOQFHc7TnXFvHPKTRtd2O2V3/4nZ22cpaRb8S6vbUKZV2BbBx3nJb/AF2o78lPYE7YhfW1dyalct5twDmQdHpg3APZTHwqT0KSmuzV17o29thjl23395kKtQtlj3lprtwalQD9oEq/D52CDuYzLXX/AIciVslaXprVW5seUd5PvtPRlIXYiaHSbfwqYQjcjriQLyjyMTPIrO3ey1R0YwgqSp7TyWus2m3iL+cSm5/7y2K5IW1okUrao58iky6sOErioQWBQfIkzh7UQoACAn4Ek61xNVXyrhfjaPnDL9JbyUnpEq34YtKAzVcEjqDiS7bUbZFbwaanGd5hWr1rhwpZjk+pl5WQUKYpr9xAJm0pkw069Y3q+sVKgbflXfAmZO5yZLv6mTgSJJ8lbKcccUEuuFdZezuEqK2FLLz+65lLCJ10MPqnS79LiklVCCGXMmzkX0j4iOTa1G67pk9AJ12Za0dCEITgDNxWFNWc9FGTOS3d01zc1KhOVVmC/GZuuN9Q8G2Zc71Byic+sE5aeT1IzPQ+Hj9ok+Rf/Ekqhd1QdzOh6ZaijTAHUjeZPhe18SpzHoJtTOfKycnoMMdbPRCeQkZQE95goLNso3M8XcgTDfUTiXwU8Cmcs2V2951Ll0G0uyp454weo5trcnrgkSLwvw4F/Vrbt13kbh7SRTU3NbcnfeOPxIXqhV2TOJbixqUeZnz1b1Izxteo36aKBygiZHRMCoxl7xTS84cdGBMzti3LU+YPqhuFtQSLrdzE2KfqBh2Mcvkw2fUSdw/bhwx7iZzL69D8VJNNmt0qulZQG+5Z5e6c1UkKMASg05mp1SeigzoVjc02pk5A23M8rF8Wqtt+FWXOpWkYKvaquabfEq7nh9SCUO8stbuVaq3h+bBOSIxbvVAyAcT18eKZWiK8lECxoG2B5tyegklNDqXP6jbDtJdFQT4lToO0Zu+Im+1BhRtNU1JyeVdscoaYtqDUbc9pV3twTzOfxJ7X/jU8N1EoNQqftEXddDZj7ENnycmEMQkhTrQQhCBwn6JftbV6dRDgggZHoTPpjSL1a9FKinIIH98T5YncfpJqwqW3gk5ankzNHTokIQmQOa/US6561Kln7SCRKhx5VA9o1xBceLfs2dsL/MkoOaog9xPYwrhjPOyvlZseHLYJTz3IlsrRm1TlpoPaOzz7e6ZZC1OhYae5iAIodopmiPql4tCi9Q7YG04Re3TXNy1VslVY47950j6o6kUoimp+4D/mYfQLdFpk1B938yjDO+ybPfGdE9NaFVBQIwMYlJVoGnUGdlznMkJZf+R5ftJzPeJK68wVeoAyZU3pbIZn7dfojXNRSoiIvVRjMz7p3HWOTyTutvZfE8Z0O0qvMOV/7yfotTw6gAOQx3lX1nttU5Kisemd4xUn0zlLovOILnldeTYHBPaMnV6jhaVPODgMRmStXWnUpiop3xGuGnpqCXG5O07x10hara2zZW2kW9C2DvhqjjqcE5IlPc4p0zgbHpLG1P8AUFaYOVzt7Sfrei8tLA7QS0zvpg7pz4Z/My71CScdprbm3JVkmQrIUdlI7mYyrfaHYWvB23uWXMQ7FjmJwe4xASdt6KOt9CoYhCYBgZ5PTPIAE3n0nvvCuyhOPEwJhAJccKV/DvKDA4w/8GcZ0+nITMf9w+//ABCYA5fSqc9yW9hNFpVPnrD2MymkPmpmbLQV/Vz7z2W9Qealuja9AB7T3MQx6T0GeX+lqHAYqjufiN5i6Hf4nGaOP/Ui6L3QXOwP8xmjTWrRCocMB0/Ejcav/wCaQenNJFeitvTp1Kb5YkZAluHqSDP6Q6dy9LIqDDDYGU9w5ZiSes12uBHtlqMoDkA5mLzmGV/hzD32emHLPTGbmtyDA6mJRWkz2rWCSO91nbGZIstLeru2cS3FjRojLYJjpxNrbM1cplNbXFQeU55DLo2vkBU9fSV95eIRyqoEmaBdc/6bn4zNz/QnLvjtGy4arpRUFzvtKvinjJ6jmlR3A2J3ldq3PTBIJwRtKTTx5uY7kmT/ACb4Tsd8aebJSXFcebGfWWtgbZ1Z6g/UHbHeXC2SimGABz1md1Sw8NvETp3AkuH5XN6ZTlwqPCn1asrOeUADO0rxJd/T5sOOnp6SKI6jMnsJ5PRFmgM8nsIAAkrTn5atNvRsyMOkVSbDA+k00cTNx/1g+s9mU/q/eExo0aLTByVcTaaG2Kkx9VOS5x8TV6Q+Ki+89Wu4PNX8jYF44jSMWjqGeb+laY+Wjtsdz8SODFW7Yb5nGjW+zi/HKEXhHqdpW3lvVphCxJBxgTQ/UWgUvEfG2f5kzUNNa4o0npjOOU/4Eph9aRH8ilNGW1G/qNTWm4IAG20qUM2fE9oBbJkYdQAZiqfSF7T7O4aVLoeztGrG2NapnsIOdjLTh6ngEzeCeVDLrjJZVHWkm3pM/dVWqEknaWmqnMrHXaVZf6RPj0+2RGSJpVTTcMPWOuIy6bSNriypNUtM29yguLTnXchd/wC0y9mcHHoZZ8K6iAHot+4YH5ldfL4VVgehO0R8pcoNfFnjTRstIuudeQ9CJ5c2+CUI8pzM1bawEwRLBtf5xuJ5M46mto9Op5elXqFkabEftPSUlZOVvaX9/qwcYxKGu2TPTitz2SVjcsRAwnpE6cE5hmOUqBfpJ9pp3Md5pScdIgAbTxEywHrJN4gRyB2nlhT5qiL6tictBI5/Rwmp/wClH0nsWb0TOLqPg3hGMbL/ADLPS6v2N8SX9TbLFRauPuwJTaLWyuPTE9XC+eM83J9bN9SfKgx9DK/S6vNTx6Sek8+1qtFEvaHhEM2CDFCeOuROM7vsyP1Q07norVUZIAJx8zG6bxNUFEUqYJddvWdZvbYXFCpTO5xtOOWdL+kr1abL5iW5c/Jm4bTM5ZVLwuWuHuKLLU2cdpiRsSvoTNLYVahrMamynPxKvXrYU6hZeh9I/J2hGJca0V7dJbcPOMESpRsiSdOqcj+xnfjvVG8y6LPVU3la6y8vafOmR8yjO2xleRE0PoYdY0yySRGnWTVOyiWR6bNTYOOoMnVmFzgn7pGZYhGKHIiqnfQ5V/QVrfw9upi7d87GSnw683cSGHXOOhk940i7BldLsntSUiV9wm8m0jzdDEXNAxKeh9LkivnhinWe0E5mjZ7I7niWFkmFzLPTk2Zj2EiBMAKO8tKqilb57kGOlEzfZmr981G+ZL4ZpeJeUExnL/wZWO3MSfWbX6XaeKt4HIz4ZDfG0Tb7HSjpf/b3+3/EJsZ7FbNmW4807xrYt3p5acs0msUfHrO6XlAVEZD0YYnE9cszb3DjGAHPL22zPQ+Fe05IvlT2qNbpFwFbB6GaETD6Zccyhu4mysqwqIPUQ+Tj09mMNdaJSxRiRPcyZDmxCNyNnt3mH+o2gE4u6Q3XzNj23m4fcRK8tRGpVBlWBG+/WHa7OpnBamq1K2EAww2O28t7XSsrm4cD0zJPGHDL2Vbxqak0yc7DpI1ctd0gUbDKNxneUYq2uxdzp9EK/wBN5DzUzzJ7SIFz8yVaVKyZp8rN23Bki60pqSiox3bt6TLTT2jPJeMVpt7tyP8AE8v7L9y7iQRg7yZb3jJs24lUZk1piqjvaK9vQxBWXbUKdQZGAZCq6cy/buJ2p32js00V5WNuklNbuO0bam3oYmpaGzQ3bvyn2i7m3UnmiGpn0MeoAsMETFTyXZubcvaGabKp6yQaykSPdWhB2i7a3PeR1DTPTx5549jFZCThRJdtQ8Mb9ZJCAR20tXruFUHHxGxJJmypsf0q1NRucjyiRuJb0FvDU7CaXUOSyoFducj8zntWsajMx7kzdPQmFtiVnaPpFpPh0WrkbvkTkOmWrVqqU1GSSNhvtmfS2g6ettb06ajGAD+SJNb7KdaLOEITAHkwn1C0jnUVkXdRg4m7jF1QWojIwyGBH+IzFfC1RjJPOWjiGl3Phvg9DNnpl1yEf6TM1xFpJtqrLg4z5T6x3SL39jfie1UrLG0eUqcVpnQeYHcd4ZlXYXWwUn4lgZ51RxZXNKkelozUMUxjbw1tAJd6dZDSqgEHYE9pzzV+H6lhV8SkOamTkgek3NQRprrblcBlPrvOT9Wap7WjFVNaoBOYIBUxuO+ZSF615Uxvy9hNXrPDNKtl6ZwxycbATP0KdazY+XIHfGY31iHjaW12SH0anTXlZgHMrLmzen13X1ku+1Ba45iSrj8RVheiohp1CM9AZ1yn4cl1rbKsHHTaPpcMO8W2nNzEDcdp69jUXtOJ0je5/Tz+qPcQNcHtEG2f0nhosO0OVB9T1nX/AExs49I74BxvgTx0CjrkwbZobY+0Qzgf+o9StqlTZFP9ppdG4SZsPV2mEuzSooNN0qpcuAAQuRNx4VDTaPM+OfH+Yu/1O20+mQpXnx+czlWu63UvKhJJ5M7CLyZFPSG48NU9vw81vV3u6hYny52EgRAXEs+H9Me7rpTUEgsoYjsCesUqb9KnjU9o330m4fLVP6l12TIXPedmlZoWmJaUKdJR9qgE+plnFt7MBCEJwAhCEAKLibRluqRwPOu6nG85Tc270nKnIZTO5TJcV8PCqpq0wOcDceol/wAP5HB8K8ZH8rByXKfTJaVqOcKxwRNRbXIIAM5+6lW/0sD0llY6oyEBuk9DLgVLaIIytPTNu0ZdpGs9RVxjMeqSCoqeiybVLoj1GkKrJdSRHmDqTIbMV6HEaq1ww5XUGOVJFcTnZpUV1zpVJ/twDIFbQSN0beXoSeqhndsG0ZsWtynTJiue5HVSZqUxHkA9BNJsVVIyBa4P7DEGhcN+wzbBR6CKBA7CbQt2kZC30GvU65X8S8sOE1BHiHJ9xLpHPwB3lHrvFCUQVQ5bcbbw0bmnXhfBbW0Xzcox8TL61xyDmnQ+MgzEahqtauSWc49MyAnlOe8wx8z+kvVWqVD4lRic743kJCB0lvScVEweuJVvQKvy4ySdh6yfNja+xb8fImtMXSpGoQqjJJwAJ3P6ccKC0pCrUUeI4B3G4HWUf044Jxy3Ndd+qKc9MdxOrKoAAHQbRTrZvJS8QqEITIoIQhAAhCEACJIztFQgBiuLeFRUBq0RhxklR+6c6eq1NilRSCNjmd5mb4j4WpXakgBX7EDE9H4vzXH1vtEPyPiKvtPpzW2uuUgq0vrTWOzzKaro9xaOQytyj92DymRaWoMOs9N/48i2jz/tjejoorq4yDGKmZkLfV8d/wDMtqGsKRuR/eTX8X9konO9dkyoIw4ji3lNu4geU9CJNWCkNnJLGVWOBYoU/eLVJj/HSDkhKrHkE8CR5E95pSxVMSFi8RYQeogeQdXA/M0kJbI+pMVoOy9cGclrsXdyx35jOuVruhysjuuCN9xOa6/bUkqFqbAgk9DOMpwdFO8bMcYydpOi17twtNGIJxzBSQItlaZEsC3iBVBOSBgTr/B/A6sVuLhd8Aqhx+DLPg7gKlaBalUB6ux3GQD+ZuFUAYAwPQRF5drihkxp7CmgUAAYA6CLhCIGBCEIAEIQgAQhCABCEIAEIQgBFvLGnWUrUUMD6zAa99P8kvbnffy9AJ0iEbjzXjf1Yu8U2u0fO+o6VWt2K1EII9MkSCajDuZ9GXNjTqgh1Bz7DMyerfT63qAmn5GPcnaWx81P+XRFXw2v4vZyBbtx0Jj9PVai9zNRf/Ty5p55D4nXpM9ccP3aE81Fxj4lKzzXjFPBU/gDXKnrFjX6krXsai9abCMujDqJx3s6pLg8QVIk8RVO0p1QnoI6lnUbojGLdjFGyXV1+se5kWpqldv3mSaOgXdT7aLn+0vrD6eXdXBceHn1EVWWTc4f9GLetUPVzF2em1q7BaasxJ7g4nYdI+mlGng1jzt7HE2VhpNGgoWmgAHqATEXnX4PnFo5Zw79MXYq9yeUdeUHOZ1HSdGoWqhaSKvuBuZYwk9W69GqUj2EITJoIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEAPJn+IOhnsIzH6Yrw5xq3eZe+hCWrwkfo3Z9ZpdK6iEJmjcnQ+Hu34mqhCR36Uo9hCEwaCEIQAIQhAAhCEACEIQAIQhAD//Z"
    },
    
    paragraph:"one shot anyone  ",
    role:"mega"

  };

  constructor() { }

  ngOnInit(): void {
  }

}

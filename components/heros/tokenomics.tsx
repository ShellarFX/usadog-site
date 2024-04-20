'use client';

import Image from 'next/image';
import { RevealOnScroll } from '@/components/reveal-on-scroll';
import { RotatingDiv } from '@/components/rotating-div';
import background from '../../public/background2.png';
import graph from '../../public/graph.png';
import { useCursor } from '@/contexts/cursor-context';

export const Tokenomics = () => {
  const { setCursorText, setCursorVariant } = useCursor();

  return (
      <div id="tokenomics" className="relative py-12 w-full items-center flex justify-center scroll-mt-12">
        <Image
            fill
            src={background}
            alt="background"
            className="pointer-events-none object-cover"
        />

        <div className="flex flex-col w-full gap-6 max-w-7xl md:px-0 items-start px-6 z-10">
          <div className="flex flex-col md:flex-row z-10 md:gap-0 gap-12 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] h-full justify-between w-full">
            <div className="inline-flex flex-col justify-between">
              <RevealOnScroll>
                <RotatingDiv>
                  <div
                      className="text-5xl md:text-7xl"
                      onMouseEnter={() => {
                        setCursorVariant('welcome');
                        setCursorText('💰');
                      }}
                      onMouseLeave={() => {
                        setCursorVariant('default');
                        setCursorText('');
                      }}
                  >
                    Tokenomics
                  </div>
                </RotatingDiv>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <div className="flex gap-12 shrink-0">
                  <div className="flex flex-col gap-2 items-end text-3xl md:text-5xl">
                    <div>LP</div>
                    <div>TAX</div>
                    <div>TICKER</div>
                  </div>

                  <div className="flex flex-col gap-2 text-3xl md:text-5xl">
                    <div>100% BURNT</div>
                    <div>0%</div>
                    <div>$USADOG</div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="flex flex-col items-center gap-4">
              <RevealOnScroll delay={0.2}>
                <div className="flex-shrink-0">
                  <Image
                      src={graph}
                      alt="graph"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAH/AssDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAIDAQQFBgf/xAAgEAEBAQEBAQEBAQEBAQEAAAAAAQIREgNhE1EEQTEU/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAdEQEBAQEBAQEBAQEAAAAAAAAAARESAgMhEzFB/9oADAMBAAIRAxEAPwD49rGxHpbDQsNEU0NCw0A8PkkNkVXJ4nlSIp8qZTimRVIplLKmRVIplPKkRT5UynlTKCkPCQ8FPDwkNAPDwkNBTw0JDQDGLDA1rGxBsaVqjQAIysbWAKwARlZWlohaytrKqFpKalqoWkp6SjJaWmpaISlpqSqzS0lNS0ZLomjUtVKWlpqSjLKWmpKrILW1lEYytYqAAABAAa2MAGaVoGhoWGiKZrI2CnhiQwpoaFjYimhoWGgpo2MjRWtY2AZpTRFEaxvQAAB8MGDquhoaEhoinh4nDwDw8Th4Krk8TyeIqsPlOHyKrFMpRTIquTxOHgKZUynD5ZVWHicPBVIeJw8A8PE4eCnhoSGgGhoSGgGjSt6BgxvQb0dZ0dEDAzoNYGdEFLWlojKyisqoykpqSiMpKa0lVllLW0tVKWlraWjJaSmpKrNZSU1JRGUtbS1WWUraWjLGVtLRAzo6xUb0dZ0dBvWlAGaXrQNGwrYBoeJw8RTRsLGwVSGhIaCmhoSGiKaGhIaCnbCxopo2FbEDxpY3opgwA0M6Og+G6GdHVdDGhOtlBSHicppUVSHicppRVc1SVLNUzRVIpmpSnzUVaHylKpmgtmnylmqSiqSqZqUp81FWyeJZp5UVWU8SlPKCkNCSmlFUlbCSmlA8ponKboH63pOt6Bx0vW9BvR1nWdEN1nWdZ0GjrOs6I3pbR0togtZay1lqoy0tFpbVQWktbaS0ZFpK20tqoy0mq20mqMstLa20lqs1lpbW2ktGay0tbaW1UZaWttLaMjrKLS2iN6xlrOqhujpejoGBejoh+tJ1vRTG6TregeU0TlNKiqSthJTSinlNE5TyinlNKnKaVFPKaVOU0oqkrYSVvQO3pOt6KfreklNKimb0nW9A3R0vW9B8L0dL0dV0PK2UkppQUlNKlKeVFVlPKlKeUFc1TNRlUzRVZVM1GVSVFVzVM1HNUlFWzVJUc1TNFVlPKlKeVFWzTyo5qkqKrKeVKU8oKymlSlPKCkppU5TSiqStlTlNKB5W9JK3oH6Ol6OiH6zpejoG6zpejoG6zpes6Ia0trLS2iNtZay0tqoLS2i0tqsi0lo1S2iC0uqLSaqsi0mq20mqILSWi0tqsi0lotLaMi0trLS2qjbS9ZaW0ZbazrLWdVG9Z1nWdEN0dL0dEN1vSdHQP1vSdb0D9bKTrZRTymlT6aVFUlNKnK2UVSU8qUppRVJTSpymlRTymlTlNKCkreklb0VTo6Trein63pOt6Kfrek6OoH63pOjoPhujpOt6rZ5WyklbKKpKaVOU0oLSnlRzTyoqsqmajKfNFXzTyo5qkqKtmnzUZVM0VbNUzUJVM0VeU8qMp5UVaU+ajKfNQWlPKjKeUVaU0qMp5QVlNKlKaUFZWypyt6CnW9T63oKdHSdHQP0dJ0dA/WdJ0dEN0dJ0dEbaW1lpeqGtLay0tqsttLay0tojbSWstLaJW2ktFpLVZbaTVFpLRltpLRaS1UFpbWWltGW2ltLay1WRay0trLRG2stLay1WTdZ0vWdA/R0nR0Q/W9T6Ogp1vU+t6CnWyp9b0VSU0qcrZQVlNKlKaVFUlNKlKaUVaVsqcrZUVSU0qcrZRVZTSoymlFV63qfW9FP1vSdHQU63qfR1FU6Ok6Og+G63qfW9VtTrZU5WygrKaVKU0oqsqmahKfNBeU8qMp5UVfNUzXPKpmiryqZqEqkqKtKpmoZp80V0Zp5UM1SUVaU8qMppUVeU8qEp5UFpTSpSmlFWlNKjKaUFZTSoymlBXrepdb0FOjqfR0FOjpOjoH6Op+h0Q/WdJ1lohrWWktZaqHtJay0tqo21lpbS2iNtLaW0tohrSWstJarLbSWi0lozW2ltLaW1UrbS2ltLaM1tpbS2ltVk1pbS2stGTdLaW1nVQ/WdJ1nRFOs6n6HQU63qXW9EU6aVHppRVetlSlb0FZTSpStlFVlPKjKaVFVlNKlK2UVaU0qMppRVZTSpStlRVZTSoymlFV6bqUregp1vU+joqnW9T6Ogp0ek+joPh+jqfR0bWmmyoymmgWlNKjNHlFWlNKjKeUVfNUlc+apmoq8p81CU8orozVM1z50pKir5qkrnlUzRV81TNc8p86FdEp5UJo8oLSnlQlPKirzRpUJo80gtKaVGVs0KtK3qU02aBbo6l1voFejqfodBXrPSfoehFPQ6n6Z6BT0y6J6LdKh7WWkumXQh7ol0W6LdKh7SXRbot0Ia0tpLot0MnuiWl1ol0qHuk7Wa0S6GTWltLdEulZNaW6LdEulQ1pbS3RLoZPaW0t0W6Vk90zqd0z0Ip6Z6TumehFOjqfR1UU63qXoegV630l6b6QWmmzSM0aaFWlbKlNNmgWlbNIzRpoVeVsqM0aVFWmjSozRpoVaVvUppvpFWlbNI+jdFVmjSozTZoVbrepeh0FejqfoehVejqXR6B8P0dS9N9K0r00qM02UF5o00hNGmkV0Snlc80eaFdEp86c80eaFdM0eVz50pNIrozpTOnNNKZ0K6JTzSE0eaRXRNHmnPNHmhXRnR5pz50eaFdEpppCaPNIq80aaQmjTQLzRppCaNNILTRvSE0aaBb0PSXoehVvQ9Jeh6EV9D0l6HoFfQ9Jeh6VFLot0ndMugU9Muk/TPQh7ot0S6LdKh7ot0S6LdCHui3Sd0y6Vk2tFuiXRLoZp9aJdF1ol0qU90S6LdEuhk90S6LdEulZPdEui3RLoZUui3RLot0rJ/TLpO6ZdCKXTPSXoelRXo6l6Z6EW9N9Iem+gW9N9I+mzQLemzSM02aRXRNNmkJo00KvNNmkZps0KvNHmnPNGmkVeaNNITRpoVeaNNITRpoVaabNIzTfSKt6bNI+m+gX9N9IemzQq3pvUfTfQK+h6S9D0D4b0PSXoelaWmjTSE02aB0TRppzzR5oV0TR86c80fOkV0zR5pzZ0eaFdOdKZ05po+dIrpmlM6c00eaGnTnSk05s6UzpFdE0eac80eaFdE0fOnPNGmgdM0eac00eaFdE0aac80aaRXRNNmkJo00C8030hNNmkF/TfSHpvoFvQ9I+m+lFvQ9I+h6BX0PSXpl0IrdF9J3TPQil0y6Tui3Sil0W6TumXQypdEuiXRLoRS6LdJ3RbpUPdFuk7ot0Mnui3Sd0W6Vk+tEuia0S6EqmtEuiXRLpWapdFukrpl0M1S6LdJXTLpWapdMukrpnpWVfTLpG6Z6EW9D0j6HoRb030h6b6Bf02aQ9N9AvNGmnPNGmhV5o00hNNmhXRNGmnPNGmkV0TRppzzRpoV0TTZpCaNNIq80aac80aaFdE02aQmm+hV/TfSPoekVf030hNN9At6b6R9D0Kv6HpD0PQPh/Q9Iex7aV0ejTTmmzTQOiaPNOaaPNIrpmjzTlmlJoV050pNOWaUzpFdM0eac00pNDTpzpSacudKZ0iumaUzpyzR86FdU0eac2dHmkV0zR5pzTR5oV0TR5pzTR5oV0zRppzTR5oF5o0055o00irzTfSE030C/pvpD030C/oekPTfQLeh6R9D0It6Z6R9MugV9M9JemehFrot0ldFulRW6LdJ3RboRS6LdJ3RLoRW6LrSV0XWlZUuiXSd0W6EUuiXSd0W6Vk90W6Sui62M1S6LdJXRLtWardFukrot2rNVui3aV2S7VmremXaN2X2M2reh6Q9s9qzro9M9oex6E10ex7c/pvoNdE02ac3o02LrpmmzTmmzTQa6Zs005pps2jTqmjTTmmzTQrpmjTTmmzTSK6Jo0055o00K6Jo0055o00irzRppzzTZoV0+m+nPNN9Cr+m+kPTfSKv6HpD030C/oekPQ9A+E9t9uX2326JrqmzTbkmzzaLrqmzzTkmzzaLrrmj525Js82NOuaUzpyZ2pNIrrzo805M7VztGnVnR86cudHzoV1zR5py52eaRXVnSk05JpTOhXVNGmnNNHmkV0zRppzTR5oV0TR5pyzR5sV0zTZpzzbZoHR6N6c/pvoF/TfTn9N9Iro9D05/TfYi/oekPbPYL+mekLsewW9M9I+2XaotdFukrst2ItdFu0bst2ItdEu0rst2qK3ZLtO7JdjKt2W7Ruy3asq3ZNbSuya2JVbsmtpXZLtWKtdku0bst2rNVuy3aN2TW1Zq12W7RuyXasWr3bLtz36Mv0GLXR7Z7c3tn9FS10+x7c39Gf0MZ11+xNuX+jfZhrqm2zblm2zZi665s025Js02LrrmzTbkmzTaLrrmzTblmzTaNa6po825Js82NOqaNNuWbNNorqm2zbmmzTYrp9NmnPNtm0V0zbZtzemzYrq9D055tvsV0eh6Q9j0C/oekPQ9IPz/APo2fRwf2bPs7cuXb0J9DT6OCfb9NPqY1PT0J9Dzbgz9VM/RnGpXdnamduHP0Uz9ExuV3Z2pnbiztTO0ajtztTO3Fnamdo07Zs+duPO1M7RXZnZ5tyZ2fO0adc0fO3LNnmxXXNnm3JnZ5sV1TZptyzZ5tFdM0aac02abFdM2abcs2abB0zbfbn9t9g6Pbfbm9t9g6PY9uf2PYOj2Pbn9j2C92z2h7Z7Bf2z2h7Z7EXu2XaF2W7EWuy3aN2W7VFrst2jdkuxF7sl2jdkuxmrXZdbRuya2rNWu07tK7Tu1Zq2tku0dbJfoM1bWya2hfoS/Rpi1e7Jdue/Qmvorna6b9CX6OXX1Jr6rI5306r9C36OPX2/SX7NY5X27r9S/1cN+tZ/T9XGL7d39R/Vw/wBB7MZ6ru/r+tn1/XDNj2Yd16E+hp9Hn/0v+mn1piz29CfQ8+jzp9T5+yY1PcehPoefRwZ+v6efRMdJ6d02ebcU+h59ExuV2zZptxz6Gm0aldk2ebcc2abRrXZNmm3JNmmxrXXNtm3LNmm0V1TbfblmzexXT7b7c3se0V1ex7c3tvsHT7Hv9c3sexX5l/Rv9HP0ddu458x1T6mn1/XJ0d/TqHDvz9lcfb9ebNU0+lX8qZY9bP1/Vs/V4+ftz/1fH3/Wb5bletn6KZ+jzMfb9Xx9WbHSV6WfopnbzsfVbP0ZbjvztTO3Dn6KZ+iNO7O1M7cOfornaK7Js8245s82jTtzs82487PNiuubNNuSbPNiuubNNuSbNNorqmzTblm2zYOr2325fbfYOr2325fbfYrp9j3+ub2PYjp9/rPbn9j2C/tntD2y7B0XZbtD2W7EdF2y7c/st2Ivdlu0Lsl+io6Lsl2hfoTX0EdF2S7c9+hL9FZrov0T19EL9E9fQZro19CX6ObX0JfqrNdGvonr6ObX1S19f1pztdWvonr6uTX2/Ud/dqRy9enbr6/qWvs4tfa3/wBJfq1I431b/jr19iX6frlv1LfqrPFrqux7cd+v6y/Y0/m7PY/o4v7fo/t+mr/N2/0Htxf2/R/af6afzd3se3FPr+tn1/TU/m7Zs024p9TT6ms/zdk22bck+hp9DWb83XPpf9Pn61xz6NmxObHfn7fqufq82bPPp+mLLY9PP1PPo8zP1qmfszY6T29KfQ8+jz8/X9Uz9Ux0np3z6Gm3DPqefRG5XbPoabcU+hp9Ea12zbZ9HHPoafQa12Tbfbjn0NPog6vbfbk/o32Lrq9j25v6D+ga/PQAigAAB0A0HWy/rA1PVgpn6ai/z/6P9cg611P+k/Hp/P7/AK6Mfb9eNndn/q2PtYflb817OPr+q5+ryMff9dGPszY6x6mforn6PMx9v1bP1/WWno5+h5twZ+v6pn6orvz9Dz6OGfQ+foiu6fQ024s/Q8+grtmzT6OKfQ0+iK7PZvbjmzT6Cuv22bcn9G/0B1/0H9HJ7b7B1ex7cv8AQf0B1f0H9HL7Z/QHVfoz25b9GX6A6vZfbmv0LfoI6rsl+jmv0LfoJjpv0Lfo5b9CX6qmOq/Ql+jlv1Jfr+iY6r9E79XLr7Ja+36rNjr19U9fVx7+/wCo7/6P1cZsduvt+pa+364N/wDT+uff/T/jUjnXo7+8/wBQ3/0frz9fbVJd2/8ArX5HKy126+/f/Utfb9cvaDtniL37Fv1qQTprmHv0rPdKE6q5G+qO1gTao6O0A2g7R2gG0b6o9VgNphvdNPrUwvVTItPtTT7OcHScR1z7fp59f1wt7V6Zvzj0J9f08+jzZuw0+ta6jF+T0p9DT6POn2Pn7LrF+T0Z9P0+ftXnz6/p59f0Z4sejn7KZ+368yfQ0+v6YTY9WfU8+ryp9r/qk+6Y3Pb059TT6frzZ9/08+36mNz09GfVv9Hnz7fpp9v1Mald8+jf6OD+v63+pi67v6D+ji/r+j+v6mGvlgAy2AAAAAAAAAAAAANmrFc/REGtT1Y68/WrY+zz5qxTOzXbz9JXpY+62fs8vOz53f8AU2OsyvWz9v1TP1/Xk5+tUz9qN8vVz9f1SfX9eVn7qZ+/6hy9OfU8+rzc/b9PPt+i49GfRs+jgn2/TT7fqGO+fRv9HB/X9b/UMd39P1v9HD/X9H9f0XHd/Qf0cP8AX9H9f0Mdv9Gf0cV+v6y/b9DHbfqy/VxX7fpb9v0OXdfqS/Vw37/pL9/0OXffqS/Vwa/6P1PX/QqcvQ19v1PX2/Xn6+9T19aHL0Nff9S1/wBH64NfS/6S7NjNkjs1/wBH6jv71za2nra65evfmL7+1/1HX1tTt6FcfX0t/wAbdWsAHMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG9rZulC7TFJ9bDT7VEL1WeY6Z9jT7frkHV6TiO2fb9NPt+uDtb6q9Rn+cehPt+mn3/Xne63+lOofzelPu3+7zP6Vv9auw4r0/wC/6P8A9DzP60f1p+HNTADk6gAAAAAAAAAAAAAAAAAA2asUztIJjU92OiaNNOaasPNs3y7efq6Jo00hNGmk/Xfz9F5u/wCmn0v+ueaNKm10nt0T63/Wz61z9b06rU9R0z7Vv9q5et6dLsdP963+9cvR06XY6v71n9q5ujp0bHRftWX7VDrOp1U2L363/S36X/Uus6bU6il3f9ZdJ3TLpdrN9numXSd0W6MYv0Uui3SV2S6tanlw9fZW7TuyhrHG+7Rb0AKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACXhpooMWerFZo00g2Vnl0n0q8030hNGmk5dJ9VvTfSPpvpMbn0V9DqXpvpMX+inoek/TPRh/RX0z0n6ZdLiX6KemXSd0W6Xli/VW6Ldp21i8ud+lNdlttAaxzvq0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0dABvaPVYBdrfVHWANo6ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGyNmTVnm0o4pMt8prc8J+W+VPLfKa1Pml5HlXg4mr/ADS8jyrweV0/mj5ZxbyzyazfmkFLllyus3xSBtjFZzAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANMmmU1qebSTJ5k8y2RnXbz8yzLZDyNkTXSeC8HD8bxNbngnBw/BxNa5LwcPwcNXknGcU4OGnKfBw/Bw1OE+MsU4zi6zfCVyW5W4yxdc780Lkti9yW5alcvXzSB7klnGtcrLAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJ08ymtTzaWZPMmmTyM2u3n5lmTSGkbIzrt58FkNxvG8TXSeWcbw3G8TW55LwcPM3/GzFGuScHFZ862fMxciPG8W/k3+Rh+Ofg46f5D+X4uJ+Obg46f5fg/kYfjl4zjq/ky/JcZ/HNxnHRfky/KmJZHNYyx0X50lxVysXzELC3K9xf8AC3K5XP14c1yWx0XJNZalcPXzSBrkquVmAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4OUAAAAAAAAAAAAAAACToA0y3OVJGbXXz40syeRshpGbXfz4ZIaRshpms67TyWQ0imfmrn5o3+ITNPPnXRn5qT5rhrmnyPPk6Zg8wHTmnzPPn+OiYNMCdOefNs+bpmGzAa5v5m/m6PDfCprm/mPE/x0+B4E1zePwfzdXhnhTXL/Nn83X4Z4E1yfz/GX5/jr8MuFTXHfmS/L8dtwy4VnXDfkS/J3XBbhWbXn6+Sevi9G/Ml+axm15uvklr5V6mvmlr5fjUc/Ty7iz/wvHo6+P4jv4tZK438cnAtfmW4pwz0mDXNZxOKusA4OM81QBwJgAAAAAAAAAAAAAAAAAAAAAAAAABxcABxvDmjA0cXmjAeZNMLwslqXK2ZWmWzJy3PCUw3wtMtmTlufNHw3wt5Hn8OWp4R8jyt5b5TleHEAGXlAAAAAAAAAEh85Fk0siky2Q8jFrv58MkNI2Q+cdZ13nksh84tVz81s/NG9xHPzWz81c4UzgNSzhTOFc5PMianMHmVJk8yGpzJplWZNMqalMmmVZlsyGpTLfC0y3yGozDfC3keREvI8reR5BHyPK3keVRDyPC/llyIh5Zcr+R5VHP4Lcum5LcqjmuC3DpuS3IzXNcEuHXckuVZrkuCXDr1ktw0xXFfmnr5u64TuFjnXBr5I6+b0dYT1825XH1Hn35lvzdmvmS4ac+rHHfmW/N2XBbhWp7cdxWcrruC3CY1Pbl4HRfmW/M5jXSPGcVuGeE4i9J8HD+WeU4XS8HDcHDg0vBw3Bw4NLwcNwcODS8HDcbxeDS8BvNb5q8GkHFPFHheU0nBxWYbPmvMTqI8bM2/+OjPyUz8j8WfrlmLTz511z5nnzZtdZHLPmafJ1T5nmE10jkny/DT5OqYN4TWtcs+bf5uqYb4TV1y/wA2/wAvx1eG+E1dcn8/xv8AN1eB4NNfOgBh5AAAAAANkEh5Etb8+dZIpIJDyM2u/nwyQ+c9NjC2MMus/C4wtjBs5VzlDS5wrnBs5UzlQucKZybOVJkCTJ5k8yeZQJMnmTTJ5lVJMmmTzJpkCTLZDzJpkCcbMnmW+QJ5b5U8jgiflvlTyPIJ+R5V8s4qJXI8q8HkRHyPKvllyqI3LPK3lnlUQuS3K9yy5GahckuXRcluVZrnuS3LouSXKs1z3JLl03JLlWK5rlPWHVck1lqOdcmsJaw7LlPWGpXH1HHcluXVrCVzxtxv4hcsuV7ktyE9IXLLlfyzyNT057hlw6LlnkXpz+GeHR5Z5Vrtz+GeHR5HkXtz+PweF/I8h2h4HhfyPIdo+B4X8jyHSPhvhby3yJ0j4b5WmT5wEuoT5qZ+a2cKTCWunmIz5nmFZg8yzrrEZg8wrMmmWdbiUw3wrMmmUbiUyaYV8t8oqPhvlaZb5FR8jyt5b5FQ8jyv5HlB8eAEeYAcbILjOGkbIaRm1vz5EhpGyKZyza7TzjM5VxhuMrZyy2zGFs5Gcq5imjOVM5bmKZgrM5UzluYeQBmHzBIpmAyQ8jZDyCskNI2Q8gFkNIaQ0gFkbIaQ0gFkbw0jZALxvDcbwCcbw/BwQnGcU4OKJ8Hk/BxUT4yxXjLBEuMsV4yxWUbGWK8ZYIjYyxWxlis1CwtytYWxWajckuV7CWKxUNZLrK+oSxYxXPrJNZdFyS5ajnY5tZT1h1XKestSuXqOW5JY6dZT1lqVxsxHjLFbGcVNS4zivGcF1PjOKcHA1Lg8qcHBdT8s8qcHA1Py3yfjeBqfkcU4OKaTy2ZUmVJlGpNTzg8wpMmmWbXbzCTJ5k8yaZZdYSZNMnmTTKNwnk0yfjZEbhPLZlSRsiLCTLfJ5G8GiTLZk/G8RU/LfKnBwVPyPKnBwHw/Bw3G8Z1y5LIaRrZE1qeRIaRsh85ZtdJG5yrnLMxbMRoZyrnIzFMwG5imYzMUzBW5iuYXMUzAbIpIyQ8grZDyMkPIDZDyMkPIAkPIJDSCiQ0gkNIDJDSNkbIDJG8bIbgF43huDgM4OG4OCF4zh+DioXjOH4OKJ8Fh+M4MksZYexlgifGWKcLYqJ2MsUsLYrNSsLYrYWxWalYWxWwtisVGwtithbFjNRsJYtYXUVzqFhLlewljTFQuU9ZdGoSxqOXqObWS2L6hNZajjYlxnD2M4rOk4OHZwXScHD8ZwNLwcNwcDS8HDcbILpOGmTzJpEtb8wsyeZNIaRmu3mMkNI2Q8jLpCyGkbIbiOkZIaRshpEbheGkbIaRGoXjZDcbINMkbw0jeIpONkNxvBS8HD8HBScHD8HAfCjhuNkc9TGSGkbIaRGm5imYzMUzEG5iuYXMUzBTZiuYXMUzANmKZhcxTIpsw+YXKmRTSKSFyeA2Q8jIeCtkPIWHgGkNIyHgokNII2A2RsgjYAkNIGgzjW8ADga0QvBxvAqM4ONFVCs4ZnBC2MsPS0QvC2HZVQnC2H4yqzU7C2KUtVmp2FsUpbFYqdhLFKWxWalYWxSlsVipWFsUsJYrFTsJYrYSxpzqVhLFbCWNRzsSsLYrYSxXKwnGcNwKyQG4wGBvG8FZxsjZDyJW5GSGkEhpEdZBIaQSGjLrBIaQSGkR0gkNIJDRG4ONkBojUHGyA0iNQcHGtkRoSN42RvBS8bxreIpeN43gFZwcMOA+FEDXIbIpCQ8FPmKZhMqZA+VMp5VyKfKmSZUyB8qZJk+RT5UyTKmRT5PCZUgGh4SHgpoeFh4BoaFh4K2GjIaA2NYaA1sY0GgRoCN4AIwcaFRnA1lVGcYZlELWU1ZRCspi1WS1lNSqlLS01LRmlpaYtVikpaclVmkpaelrTFTpaekqsUlJVKS//AFWKSkqlJWnOp0tPf/pdLHOksYasrTFKGgGcbIGwWNkbIyGZdI2GjIaI6xsNCmiOkNGxhojcbDRkbGW4ZsY1GoZsZGwaa2CNRpo4I0UANiKA0CgAA//Z"
                      className="w-[360px] md:w-[660px] h-auto"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          <RevealOnScroll>
            <div className="flex gap-0 md:gap-4 items-start md:items-center flex-col md:flex-row drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              <div className="text-5xl">TOKEN ADDRESS</div>
              <div className="text-sm md:text-4xl">GjNwKDdL4ED5JTrnXN9LZWPiKiXpQCPgvvppE6cJYJzP</div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
  );
};
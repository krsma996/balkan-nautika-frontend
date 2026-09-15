// import { useState } from "react";
// import {ArrowLeft, ArrowRight,Eye,EyeOff,LockKeyhole,Mail,ShieldCheck,Waves} from "lucide-react";
// import { useNavigate } from "react-router-dom";





// export const UserLogin = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const navigate = useNavigate();

//   return (
//     <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
//       <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center">
//         <section className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/50 bg-white/55 shadow-[0_25px_80px_rgba(34,40,49,0.12)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
//           {/* Brand / Presentation */}
//           <div className="relative hidden overflow-hidden bg-[#222831] p-12 lg:flex lg:flex-col lg:justify-between">
//             <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#385170]/40 blur-3xl" />
//             <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#385170]/30 blur-3xl" />

//             <div className="relative z-10">
//               <button
//                 type="button"
//                 onClick={() => navigate("/")}
//                 className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
//               >
//                 <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
//                 Nazad na pretragu
//               </button>

//               <div className="mb-12 flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10">
//                   <Waves className="h-5 w-5 text-sky-400" />
//                 </div>

//                 <div className="leading-none">
//                   <div className="text-lg font-extrabold tracking-tight text-white">
//                     NAUTIKA
//                   </div>

//                   <div className="text-sm font-light tracking-[0.28em] text-sky-400">
//                     OGLASI
//                   </div>
//                 </div>
//               </div>

//               <div className="max-w-md">
//                 <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
//                   Nautical marketplace
//                 </p>

//                 <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
//                   Sve za nautiku.
//                   <br />
//                   Na jednom mestu.
//                 </h1>

//                 <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
//                   Pronađite plovilo, opremu, delove i usluge ili objavite
//                   sopstveni oglas.
//                 </p>
//               </div>
//             </div>

//             <div className="relative z-10">
//               <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
//                   <ShieldCheck className="h-5 w-5 text-sky-400" />
//                 </div>

//                 <div>
//                   <p className="text-sm font-semibold text-white">
//                     Sigurna prijava
//                   </p>
//                   <p className="mt-1 text-xs leading-5 text-slate-400">
//                     Vaš nalog i identitet zaštićeni su modernim authentication
//                     sistemom.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Login */}
//           <div className="flex items-center bg-white/65 p-6 sm:p-10 lg:p-14">
//             <div className="mx-auto w-full max-w-md">
//               {/* Mobile logo */}
//               <div className="mb-10 flex items-center gap-3 lg:hidden">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#222831]">
//                   <Waves className="h-5 w-5 text-sky-400" />
//                 </div>

//                 <div className="leading-none">
//                   <div className="text-base font-extrabold text-[#222831]">
//                     NAUTIKA
//                   </div>
//                   <div className="text-xs tracking-[0.25em] text-[#385170]">
//                     OGLASI
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-9">
//                 <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#385170]">
//                   Dobrodošli nazad
//                 </p>

//                 <h2 className="text-3xl font-bold tracking-tight text-[#222831]">
//                   Prijavite se
//                 </h2>

//                 <p className="mt-3 text-sm leading-6 text-[#385170]/70">
//                   Prijavite se na svoj Nautika Oglasi nalog.
//                 </p>
//               </div>

//               <form className="space-y-5">
//                 {/* Email */}
//                 <div className="form-field">
//                   <label htmlFor="email" className="form-label">
//                     <Mail className="form-label-icon h-4 w-4" />
//                     Email adresa
//                   </label>

//                   <input
//                     id="email"
//                     type="email"
//                     autoComplete="email"
//                     placeholder="vas@email.com"
//                     className="form-control"
//                   />
//                 </div>

//                 {/* Password */}
//                 <div className="form-field">
//                   <div className="mb-2 flex items-center justify-between">
//                     <label htmlFor="password" className="form-label mb-0">
//                       <LockKeyhole className="form-label-icon h-4 w-4" />
//                       Lozinka
//                     </label>

//                     <button
//                       type="button"
//                       className="text-xs font-semibold text-[#385170] transition hover:text-[#222831]"
//                     >
//                       Zaboravili ste lozinku?
//                     </button>
//                   </div>

//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       placeholder="Unesite lozinku"
//                       className="form-control pr-12"
//                     />

//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((value) => !value)}
//                       aria-label={
//                         showPassword ? "Sakrij lozinku" : "Prikaži lozinku"
//                       }
//                       className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-[#385170]/60 transition hover:text-[#385170]"
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-4 w-4" />
//                       ) : (
//                         <Eye className="h-4 w-4" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Remember */}
//                 <div className="flex items-center justify-between pt-1">
//                   <label className="flex cursor-pointer items-center gap-3 text-sm text-[#222831]/70">
//                     <input
//                       type="checkbox"
//                       checked={rememberMe}
//                       onChange={(event) => setRememberMe(event.target.checked)}
//                       className="h-4 w-4 rounded border-[#385170]/30 accent-[#385170]"
//                     />
//                     Zapamti me
//                   </label>
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#222831] px-5 text-sm font-bold text-white shadow-lg shadow-[#222831]/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#385170] hover:shadow-xl"
//                 >
//                   Prijavi se
//                   <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
//                 </button>
//               </form>

//               {/* Register */}
//               <div className="mt-8 border-t border-[#385170]/10 pt-7 text-center">
//                 <p className="text-sm text-[#222831]/60">Nemate nalog?</p>

//                 <button
//                   type="button"
//                   onClick={() => navigate("/register")}
//                   className="mt-2 text-sm font-bold text-[#385170] transition hover:text-[red]"
//                 >
//                   {" "}
//                   Kreirajte nalog{" "}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

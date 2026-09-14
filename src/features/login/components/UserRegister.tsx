// import { useState } from "react";
// import {ArrowLeft,ArrowRight,Check,Eye,EyeOff,LockKeyhole,Mail,UserRound,Waves} from "lucide-react";
// import { useNavigate } from "react-router-dom";



// export const UserRegister = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const navigate = useNavigate();

//   return (
//     <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
//       <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center">
//         <section className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/50 bg-white/55 shadow-[0_25px_80px_rgba(34,40,49,0.12)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
//           {/* Brand */}
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

//               <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
//                 Pridružite se
//               </p>

//               <h1 className="max-w-md text-4xl font-bold leading-tight text-white xl:text-5xl">
//                 Vaša nautika.
//                 <br />
//                 Vaš oglas.
//               </h1>

//               <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
//                 Kreirajte nalog i pristupite kompletnom svetu plovila, opreme,
//                 delova i nautčkih usluga.
//               </p>
//             </div>

//             <div className="relative z-10 space-y-3">
//               {[
//                 "Objavite svoje oglase",
//                 "Sačuvajte omiljena plovila",
//                 "Pratite svoje aktivnosti",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-400/10">
//                     <Check className="h-3.5 w-3.5 text-sky-400" />
//                   </div>

//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Register */}
//           <div className="flex items-center bg-white/65 p-6 sm:p-10 lg:p-14">
//             <div className="mx-auto w-full max-w-md">
//               <div className="mb-9">
//                 <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#385170]">
//                   Novi korisnik
//                 </p>

//                 <h2 className="text-3xl font-bold tracking-tight text-[#222831]">
//                   Kreirajte nalog
//                 </h2>

//                 <p className="mt-3 text-sm leading-6 text-[#385170]/70">
//                   Registrujte se i počnite da koristite Nautika Oglasi.
//                 </p>
//               </div>

//               <form className="space-y-5">
//                 {/* Name */}
//                 <div className="form-field">
//                   <label htmlFor="name" className="form-label">
//                     <UserRound className="form-label-icon h-4 w-4" />
//                     Ime i prezime
//                   </label>

//                   <input
//                     id="name"
//                     type="text"
//                     autoComplete="name"
//                     placeholder="Ime i prezime"
//                     className="form-control"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="form-field">
//                   <label htmlFor="register-email" className="form-label">
//                     <Mail className="form-label-icon h-4 w-4" />
//                     Email adresa
//                   </label>

//                   <input
//                     id="register-email"
//                     type="email"
//                     autoComplete="email"
//                     placeholder="vas@email.com"
//                     className="form-control"
//                   />
//                 </div>

//                 {/* Password */}
//                 <div className="form-field">
//                   <label htmlFor="register-password" className="form-label">
//                     <LockKeyhole className="form-label-icon h-4 w-4" />
//                     Lozinka
//                   </label>

//                   <div className="relative">
//                     <input
//                       id="register-password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       placeholder="Kreirajte lozinku"
//                       className="form-control pr-12"
//                     />

//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((value) => !value)}
//                       className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-[#385170]/60 hover:text-[#385170]"
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-4 w-4" />
//                       ) : (
//                         <Eye className="h-4 w-4" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Confirm password */}
//                 <div className="form-field">
//                   <label htmlFor="confirm-password" className="form-label">
//                     <LockKeyhole className="form-label-icon h-4 w-4" />
//                     Potvrdite lozinku
//                   </label>

//                   <div className="relative">
//                     <input
//                       id="confirm-password"
//                       type={showConfirmPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       placeholder="Ponovite lozinku"
//                       className="form-control pr-12"
//                     />

//                     <button
//                       type="button"
//                       onClick={() => setShowConfirmPassword((value) => !value)}
//                       className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-[#385170]/60 hover:text-[#385170]"
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff className="h-4 w-4" />
//                       ) : (
//                         <Eye className="h-4 w-4" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Terms */}
//                 <label className="flex cursor-pointer items-start gap-3 pt-1 text-xs leading-5 text-[#222831]/60">
//                   <input
//                     type="checkbox"
//                     className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#385170]/30 accent-[#385170]"
//                   />

//                   <span>
//                     Prihvatam{" "}
//                     <button
//                       type="button"
//                       className="font-semibold text-[#385170] hover:text-[#222831]"
//                     >
//                       uslove korišćenja
//                     </button>{" "}
//                     i{" "}
//                     <button
//                       type="button"
//                       className="font-semibold text-[#385170] hover:text-[#222831]"
//                     >
//                       politiku privatnosti
//                     </button>
//                     .
//                   </span>
//                 </label>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#222831] px-5 text-sm font-bold text-white shadow-lg shadow-[#222831]/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#385170] hover:shadow-xl"
//                 >
//                   Kreiraj nalog
//                   <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
//                 </button>
//               </form>

//               <div className="mt-8 border-t border-[#385170]/10 pt-7 text-center">
//                 <p className="text-sm text-[#222831]/60">Već imate nalog?</p>

//                 <button
//                   onClick={() => navigate("/login")}
//                   type="button"
//                   className="mt-2 text-sm font-bold text-[#385170] transition hover:text-[red]"
//                 >
//                   Prijavite se
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

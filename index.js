(async () => {
  await new Promise((e) => window.addEventListener("load", e)),
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const r = { u: "input[name=username]", p: "input[name=password]" },
        t = {};
      for (const e in r)
        t[e] = btoa(document.querySelector(r[e]).value).replace(/=/g, "");
      return "Y3liZXI" !== t.u
        ? alert("Incorrect Username") 
        : 
        "c2VjdXJpdHk" !== t.p
        ? alert("Incorrect Password")
        : void window.location.assign("page.html"); //alert("Correct Password");
    });
})();

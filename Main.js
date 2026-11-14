// University Link Primary School
// Homepage interactions

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const yearElement = document.getElementById("year");

    // Display the current year in the footer.
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Toggle the mobile navigation menu.
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        // Close the mobile menu after selecting a section.
        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";
            });
        });
    }
});
// UNIVERSITY LINK PRIMARY SCHOOL - SUPABASE CONNECTION

const SCHOOL_SUPABASE_URL = "xxxxxxxxxxxxxxxxxxxxxxxxxx";

const SCHOOL_SUPABASE_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const schoolSupabase = window.supabase.createClient(
    SCHOOL_SUPABASE_URL,
    SCHOOL_SUPABASE_KEY
);

console.log("University Link Supabase connection initialized!");
// TEST SUPABASE DATABASE CONNECTION
schoolSupabase
    .from("subjects")
    .select("subject_name")
    .limit(1)
    .then(({ data, error }) => {
        if (error) {
            console.error("Database test:", error.message);
        } else {
            console.log("Database connection successful!", data);
        }
    });


import Link from "next/link"

export const metadata = {
  title: "Terms and Conditions | Diani Pet Care",
  description:
    "Learn how to use the Diani Pet Care website and access our services.",
};

export default function Page() {
    return (
        <main className="max-w-screen-xl mx-auto px-6 py-16 text-gray-800">
            <h1 className="text-3xl font-bold text-center mb-8">
                Website Terms and Conditions of Use
            </h1>

            <section className="space-y-6 leading-relaxed">
                <div>
                    <h2 className="text-xl font-semibold mb-2">1. Terms</h2>
                    <p>
                        By accessing this Website, accessible from{" "}
                        <Link
                            href="https://dianipetcare.com"
                            className="text-blue-600 hover:underline"
                        >
                            dianipetcare.com
                        </Link>
                        , owned and operated by Diani Pet Care, you are agreeing to be bound
                        by these Website Terms and Conditions of Use. You also agree that
                        you are responsible for compliance with any applicable local laws.
                        If you disagree with any of these terms, you are prohibited from
                        accessing this site. The materials contained in this Website are
                        protected by copyright and trademark law.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the
                        materials on Diani Pet Care&apos;s Website for personal, non-commercial
                        transitory viewing only. This is the grant of a license, not a
                        transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Modify or copy the materials;</li>
                        <li>Use the materials for any commercial purpose or for any public display;</li>
                        <li>Attempt to reverse engineer any software contained on Diani Pet Care&apos;s Website;</li>
                        <li>Remove any copyright or other proprietary notations from the materials; or</li>
                        <li>Transfer the materials to another person or “mirror” the materials on any other server.</li>
                    </ul>
                    <p className="mt-2">
                        Diani Pet Care may terminate this license upon any violation of
                        these restrictions. Upon termination, your viewing rights will also
                        be terminated and you should destroy any downloaded materials in
                        your possession whether in printed or electronic format.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">3. Disclaimer</h2>
                    <p>
                        All the materials on Diani Pet Care&apos;s Website are provided &apos;as is&apos;.
                        Diani Pet Care makes no warranties, expressed or implied, and hereby
                        negates all other warranties. Furthermore, Diani Pet Care does not
                        make any representations concerning the accuracy or reliability of
                        the use of the materials on its Website or otherwise relating to
                        such materials or any sites linked to this Website.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">4. Limitations</h2>
                    <p>
                        Diani Pet Care or its personnel will not be held accountable for any
                        damages that arise with the use or inability to use the materials on
                        Diani Pet Care&apos;s Website, even if Diani Pet Care or an authorized
                        representative has been notified, orally or in writing, of the
                        possibility of such damage. Some jurisdictions do not allow
                        limitations on implied warranties or limitations of liability for
                        incidental damages; these limitations may not apply to you.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">5. Revisions and Errata</h2>
                    <p>
                        The materials appearing on Diani Pet Care&apos;s Website may include
                        technical, typographical, or photographic errors. Diani Pet Care
                        does not warrant that any of the materials on its Website are
                        accurate, complete, or current. Diani Pet Care may change the
                        materials contained on its Website at any time without notice. Diani
                        Pet Care does not make any commitment to update the materials.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">6. Links</h2>
                    <p>
                        Diani Pet Care has not reviewed all of the sites linked to its
                        Website and is not responsible for the contents of any such linked
                        site. The inclusion of any link does not imply endorsement by Diani
                        Pet Care. Use of any such linked website is at the user&apos;s own risk.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        7. Site Terms of Use Modifications
                    </h2>
                    <p>
                        Diani Pet Care may revise these Terms of Use for its Website at any
                        time without prior notice. By using this Website, you agree to be
                        bound by the current version of these Terms and Conditions of Use.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">8. Your Privacy</h2>
                    <p>
                        Please read our{" "}
                        <Link
                            href="/privacy"
                            className="text-blue-600 hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
                    <p>
                        Any claim related to Diani Pet Care&apos;s Website shall be governed by
                        the laws of Kenya without regard to its conflict of law provisions.
                    </p>
                </div>
            </section>

            <div className="mt-12 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Diani Pet Care. All rights reserved.
            </div>
        </main>
    )
}
export default function SigninForms() {

    return (
        <div>
            <h2>Sign In</h2>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )

}
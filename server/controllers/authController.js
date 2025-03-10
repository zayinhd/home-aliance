import User from "../models/User.js";
import bcrypt from "bcrypt";

export const login = async (req, user) => {
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
            return res.status(400).json({ message: "All input is required" });
        }

        const user = await User.findOne({ username });

        if (!user) return res.status(404).json({ message: "User not found" });

        const isPassword = await bcrypt.compare(password, user.password);

        if (!isPassword)
            return res.status(404).json({ message: "Password incorrect" });
        if (!(user && isPassword))
            return res.status(404).json({ message: "Invalid credentials" });

        const token = generateJWT(user);

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

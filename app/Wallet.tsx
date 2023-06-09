"use client";

import { getZeroDevSigner, getSocialWalletOwner } from "@zerodevapp/sdk";
import { SocialWallet } from "@zerodevapp/social-wallet";
import { useMemo, useState } from "react";

function RpcProviderExample() {
	const [address, setAddress] = useState("");
	const [loading, setLoading] = useState(false);

	const socialWallet = useMemo(() => {
		return new SocialWallet();
	}, []);

	const createWallet = async () => {
		setLoading(true);
		const signer = await getZeroDevSigner({
			projectId: "2ca50395-6208-4b59-89cc-dddf66ee072f",
			owner: await getSocialWalletOwner(
				"2ca50395-6208-4b59-89cc-dddf66ee072f",
				socialWallet
			),
		});
		setAddress(await signer.getAddress());
		setLoading(false);
	};

	const disconnect = async () => {
		await socialWallet.disconnect();
		setAddress("");
	};

	const connected = !!address;

	return (
		<div>
			{connected && (
				<div className='my-4'>
					<label>Wallet: {address}</label>
				</div>
			)}
			<div>
				{!connected && (
					<button
						className='bg-blue-600 p-4 text-white border rounded-full hover:bg-emerald-800 '
						onClick={createWallet}
						disabled={loading}>
						{loading ? "loading..." : "Create Wallet"}
					</button>
				)}
				{connected && (
					<button
						className='bg-rose-600 p-4 text-white border rounded-full hover:bg-rose-800 '
						onClick={disconnect}
						disabled={loading}>
						Disconnect
					</button>
				)}
			</div>
		</div>
	);
}
export default RpcProviderExample;










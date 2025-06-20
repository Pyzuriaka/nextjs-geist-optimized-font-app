(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/GameContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GameProvider": (()=>GameProvider),
    "useGame": (()=>useGame),
    "useGameActions": (()=>useGameActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
const initialState = {
    currentGame: null,
    gameHistory: [],
    error: null,
    isLoading: false
};
const gameReducer = (state, action)=>{
    switch(action.type){
        case 'CREATE_GAME':
            return {
                ...state,
                currentGame: action.payload,
                error: null
            };
        case 'JOIN_GAME':
            if (!state.currentGame) return state;
            return {
                ...state,
                currentGame: {
                    ...state.currentGame,
                    player2: action.payload.player2,
                    status: 'joined'
                },
                error: null
            };
        case 'SUBMIT_CHOICE':
            if (!state.currentGame) return state;
            return {
                ...state,
                currentGame: {
                    ...state.currentGame,
                    ...action.payload.playerId === state.currentGame.player1 ? {
                        player1Choice: action.payload.choice
                    } : {
                        player2Choice: action.payload.choice
                    }
                }
            };
        case 'END_GAME':
            if (!state.currentGame) return state;
            const endedGame = {
                ...state.currentGame,
                status: 'revealed',
                winner: action.payload.winner
            };
            return {
                ...state,
                currentGame: null,
                gameHistory: [
                    ...state.gameHistory,
                    endedGame
                ]
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};
const GameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function GameProvider({ children }) {
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(gameReducer, initialState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameContext.Provider, {
        value: {
            state,
            dispatch
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/GameContext.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(GameProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");
_c = GameProvider;
function useGame() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}
_s1(useGame, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function useGameActions() {
    _s2();
    const { dispatch } = useGame();
    const createGame = (stake, player1)=>{
        dispatch({
            type: 'CREATE_GAME',
            payload: {
                id: `game_${Date.now()}`,
                stake,
                player1,
                status: 'created'
            }
        });
    };
    const joinGame = (gameId, player2)=>{
        dispatch({
            type: 'JOIN_GAME',
            payload: {
                gameId,
                player2
            }
        });
    };
    const submitChoice = (playerId, choice)=>{
        dispatch({
            type: 'SUBMIT_CHOICE',
            payload: {
                playerId,
                choice
            }
        });
    };
    const endGame = (winner)=>{
        dispatch({
            type: 'END_GAME',
            payload: {
                winner
            }
        });
    };
    const setError = (error)=>{
        dispatch({
            type: 'SET_ERROR',
            payload: error
        });
    };
    const clearError = ()=>{
        dispatch({
            type: 'CLEAR_ERROR'
        });
    };
    const setLoading = (isLoading)=>{
        dispatch({
            type: 'SET_LOADING',
            payload: isLoading
        });
    };
    return {
        createGame,
        joinGame,
        submitChoice,
        endGame,
        setError,
        clearError,
        setLoading
    };
}
_s2(useGameActions, "pfTUmPN6akrtmF12multQ/oo2hY=", false, function() {
    return [
        useGame
    ];
});
var _c;
__turbopack_context__.k.register(_c, "GameProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_context_GameContext_tsx_6ff3a469._.js.map
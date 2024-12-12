from .games.view import router as games_router
from .timings.view import router as timings_router
from .exp_sets.view import router as explanation_router

from fastapi import APIRouter

router = APIRouter()
router.include_router(router = games_router,prefix="/games")
router.include_router(router = timings_router,prefix="/timings")
router.include_router(router = explanation_router,prefix="/guides_sets")